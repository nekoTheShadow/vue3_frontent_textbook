import type { Member } from '@/interface'
import { defineStore } from 'pinia'

interface State {
  memberList: Map<number, Member>
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return { memberList: new Map<number, Member>() }
  },
  getters: {
    getById: (state) => (id: number) => state.memberList.get(id) as Member,
  },
  actions: {
    initList(): void {
      this.memberList.set(33456, {
        id: 33456,
        name: '田中太郎',
        email: 'bow@example.com',
        points: 35,
        note: '初回入会特典あり',
      })
      this.memberList.set(44783, {
        id: 47783,
        name: '鈴木次郎',
        email: 'mue@example.com',
        points: 53,
      })
    },
    addMember(member: Member): void {
      this.memberList.set(member.id, member)
    },
  },
})
