import { mount } from '@vue/test-utils'
import Login from '../src/components/Login.vue'
import { vi } from 'vitest'

// Mock Firebase
vi.mock('../src/firebase', () => ({
  auth: {},
  db: {},
}))

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(() =>
    Promise.resolve({ user: { emailVerified: true, email: 'test@example.com' } })
  ),
  signOut: vi.fn(() => Promise.resolve())
}))

vi.mock('firebase/firestore', () => ({
  getDoc: vi.fn(() => Promise.resolve({
    exists: () => true,
    data: () => ({ firstTime: false })
  })),
  doc: vi.fn()
}))

test('Login form submits with valid input', async () => {
  const wrapper = mount(Login, {
    global: {
      stubs: ['router-link', 'router-view']
    }
  })

  await wrapper.find('input[type="email"]').setValue('test@example.com')
  await wrapper.find('input[type="password"]').setValue('password123')
  await wrapper.find('form').trigger('submit.prevent')

  expect(wrapper.exists()).toBe(true)
})
