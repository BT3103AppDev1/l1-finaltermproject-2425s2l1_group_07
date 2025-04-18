import { mount } from '@vue/test-utils'
import AddListing from '../src/components/AddListing.vue'

describe('AddListing.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(AddListing, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
