import { mount } from '@vue/test-utils'
import Explore from '../src/components/Explore.vue'

describe('Explore.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(Explore, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
