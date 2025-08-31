import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import OneMember from '@/components/OneMember.vue'

describe('App.vueのテスト', () => {
  test('合計点数表示のテスト', () => {
    const options = {
      global: {
        stubs: {
          OneMember: true,
        },
      },
    }

    const wrapper = mount(App, options)
    expect(wrapper.text()).toContain('全会員の保有ポイントの合計：88')
  })

  test('Emitメソッドのテスト', async () => {
    const options = {
      global: {
        stubs: {
          OneMember: true,
        },
      },
    }
    const wrapper = mount(App, options)
    const oneMemberComponent = wrapper.findComponent(OneMember)
    await oneMemberComponent.vm.$emit('incrementPoint', 33456)
    expect(wrapper.text()).toContain('全会員の保有ポイントの合計：89')
  })
})
