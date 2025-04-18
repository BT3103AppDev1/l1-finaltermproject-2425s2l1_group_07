import { vi } from 'vitest'

// 🔥 Mock firebase.js exports
vi.mock('../src/firebase', () => ({
  auth: {
    currentUser: { email: 'test@example.com' }
  },
  db: {}
}))

// 🔥 Mock firebase/auth
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    currentUser: { email: 'test@example.com' }
  })),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback({ email: 'test@example.com' })
  })
}))

// 🔥 Mock firebase/firestore (with getDoc added ✅)
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  doc: vi.fn(),
  getDocs: vi.fn(() => Promise.resolve({
    docs: [
      {
        id: '1',
        data: () => ({
          title: 'Mock Listing',
          description: 'Nice mock place'
        })
      }
    ]
  })),
  getDoc: vi.fn(() => Promise.resolve({
    exists: () => true,
    data: () => ({ firstTime: false })
  }))
}))

import { mount } from '@vue/test-utils'
import Favourites from '../src/components/Favourites.vue'

describe('Favourites.vue', () => {
  test('renders properly with mocked Firebase', async () => {
    const wrapper = mount(Favourites, {
      global: {
        stubs: ['router-link', 'router-view']
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
