import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: HomeView },
    ],
  })
}

describe('App', () => {
  it('renders without crashing', async () => {
    const router = createTestRouter()
    const wrapper = mount(App, {
      global: { plugins: [router] },
    })
    await router.isReady()
    expect(wrapper.exists()).toBe(true)
  })

  it('has correct root classes', async () => {
    const router = createTestRouter()
    const wrapper = mount(App, {
      global: { plugins: [router] },
    })
    await router.isReady()
    const root = wrapper.find('div')
    expect(root.classes()).toContain('min-h-screen')
  })

  it('renders router-view content', async () => {
    const router = createTestRouter()
    router.push('/')
    await router.isReady()
    const wrapper = mount(App, {
      global: { plugins: [router] },
    })
    expect(wrapper.text()).toContain('ParleMoi')
  })
})
