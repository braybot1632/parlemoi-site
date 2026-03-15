import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
]

describe('Router', () => {
  it('resolves / to home route', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })
    await router.push('/')
    await router.isReady()
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('has HomeView as the home component', () => {
    const homeRoute = routes.find((r) => r.name === 'home')
    expect(homeRoute).toBeDefined()
    expect(homeRoute.component).toBe(HomeView)
  })
})
