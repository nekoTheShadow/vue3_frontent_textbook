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
    isMemberListEmpty: (state) => state.memberList.size == 0,
  },
  actions: {
    prepareMemberList(): void {
      let memberList = new Map<number, Member>()
      const memberListJsonString = sessionStorage.getItem('memberList')
      if (memberListJsonString != undefined) {
        const memberListJson = JSON.parse(memberListJsonString)
        memberList = new Map<number, Member>(memberListJson)
      }
      this.memberList = memberList
    },
    insertMember(member: Member): void {
      this.memberList.set(member.id, member)
      const memberListJsonString = JSON.stringify([...this.memberList])
      sessionStorage.setItem('memberList', memberListJsonString)
    },
  },
})
