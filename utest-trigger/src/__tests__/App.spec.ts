import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('初期状態(隠し領域非表示)のテスト', () => {
    const wrapper = mount(App)
    expect(wrapper.find(`[data-testid="invisible"]`).exists()).toBeFalsy()
  })
  it('表示ボタンをクリックした場合のテスト', async () => {
    const wrapper = mount(App)
    await wrapper.get(`[data-testid="showButton"]`).trigger('click')
    expect(wrapper.find(`[data-testid="invisible"]`).exists()).toBeTruthy()
  })
})
