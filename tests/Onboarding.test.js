import { mount } from '@vue/test-utils'
import Onboarding from '../src/components/Onboarding.vue'

describe('Onboarding.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(Onboarding, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
