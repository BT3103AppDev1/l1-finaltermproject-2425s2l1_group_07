import { mount } from '@vue/test-utils'
import LandingPage from '../src/components/LandingPage.vue'

describe('LandingPage.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(LandingPage, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
