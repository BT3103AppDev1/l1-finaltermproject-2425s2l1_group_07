import { mount } from '@vue/test-utils'
import Signup from '../src/components/Signup.vue'

describe('Signup.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(Signup, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
