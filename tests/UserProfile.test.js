import { mount } from '@vue/test-utils'
import UserProfile from '../src/components/UserProfile.vue'

describe('UserProfile.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(UserProfile, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
