import type { Member } from '@/interface'
import { defineStore } from 'pinia'

interface State {
  memberList: Map<number, Member>
  isLoading: boolean
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return { memberList: new Map<number, Member>(), isLoading: true }
  },
  getters: {
    getById: (state) => (id: number) => state.memberList.get(id) as Member,
    isMemberListEmpty: (state) => state.memberList.size == 0,
  },
  actions: {
    async prepareMemberList(): Promise<boolean> {
      const database = await getDatabase()
      const promise = new Promise<boolean>((resolve, reject) => {
        const transaction = database.transaction('members', 'readonly')
        const objectStore = transaction.objectStore('members')
        const memberList = new Map<number, Member>()
        const request = objectStore.openCursor()
        request.onsuccess = (event) => {
          const target = event.target as IDBRequest
          const cursor = target.result as IDBCursorWithValue
          if (cursor) {
            const id = cursor.key as number
            const member = cursor.value as Member
            memberList.set(id, member)
            cursor.continue()
          }
        }
        transaction.oncomplete = () => {
          this.memberList = memberList
          this.isLoading = false
          resolve(true)
        }
        transaction.onerror = (event) => {
          console.log('ERROR:データ取得に失敗', event)
          reject(new Error('ERROR:データ取得に失敗'))
        }
      })
      return promise
    },
    async insertMember(member: Member): Promise<boolean> {
      const memberAdd: Member = { ...member }
      const database = await getDatabase()
      const promise = new Promise<boolean>((resolve, reject) => {
        const transaction = database.transaction('members', 'readwrite')
        const objectStore = transaction.objectStore('members')
        objectStore.put(memberAdd)
        transaction.oncomplete = () => reject(true)
        transaction.onerror = (event) => {
          console.log('ERROR:データ登録に失敗', event)
          reject(new Error('ERROR:データ登録に失敗'))
        }
      })
      return promise
    },
  },
})

async function getDatabase(): Promise<IDBDatabase> {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open('asyncdb', 1)
    request.onupgradeneeded = (event) => {
      const target = event.target as IDBRequest
      const database = target.result as IDBDatabase
      database.createObjectStore('members', { keyPath: 'id' })
    }
    request.onsuccess = (event) => {
      const target = event.target as IDBRequest
      const _database = target.result as IDBDatabase
      resolve(_database)
    }
    request.onerror = (event) => {
      console.log('ERROR: DBをオープンできません', event)
      reject(new Error('ERROR: DBをオープンできません'))
    }
  })
}
