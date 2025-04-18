import { mount } from '@vue/test-utils'
import Navbar from '../src/components/Navbar.vue'
import { vi } from 'vitest'

// Mock Firebase Auth
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback({ email: 'test@example.com' }) // simulate a logged-in user
  })
}))

describe('Navbar.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(Navbar, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
