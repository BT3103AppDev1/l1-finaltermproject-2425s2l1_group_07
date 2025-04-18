// ✅ Mocks FIRST (before any imports)
import { vi } from 'vitest'

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  collection: vi.fn(),
  addDoc: vi.fn(),
  doc: vi.fn(),
  getDocs: vi.fn(() => Promise.resolve({ docs: [] })),
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback({ email: 'test@example.com' })
  })
}))

// ✅ THEN import Vue/component-related modules
import { mount } from '@vue/test-utils'
import ListingAdded from '../src/components/ListingAdded.vue'

describe('ListingAdded.vue', () => {
  test('renders properly', () => {
    const wrapper = mount(ListingAdded, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
