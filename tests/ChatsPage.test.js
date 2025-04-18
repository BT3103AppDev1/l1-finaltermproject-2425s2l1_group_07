import { mount } from '@vue/test-utils'
import ChatsPage from '../src/components/ChatsPage.vue'

describe('ChatsPage.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(ChatsPage, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
