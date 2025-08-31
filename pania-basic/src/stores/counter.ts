import { defineStore } from 'pinia'

interface State {
  counter: number
}

export const useCounterStore = defineStore('counter', {
  //保持したいデータ
  state: (): State => ({ counter: 0 }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    incrementCount(): void {
      this.counter++
    },
  },
})
