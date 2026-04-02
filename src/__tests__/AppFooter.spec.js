import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import AppFooter from '../components/AppFooter.vue'
import HomeView from '../views/HomeView.vue'

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', name: 'home', component: HomeView }],
  })
}

describe('AppFooter', () => {
  it('renders the ParleMoi brand', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    expect(wrapper.text()).toContain('Parle')
    expect(wrapper.text()).toContain('Moi')
  })

  it('renders the tagline', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    expect(wrapper.text()).toContain('Learn French by speaking it.')
  })

  it('has legal links: Privacy, Terms, EULA', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    const links = wrapper.findAll('a')
    const hrefs = links.map((l) => l.attributes('href'))
    expect(hrefs.some((h) => h && h.includes('/privacy'))).toBe(true)
    expect(hrefs.some((h) => h && h.includes('/terms'))).toBe(true)
    expect(hrefs.some((h) => h && h.includes('/eula'))).toBe(true)
  })

  it('has a contact email link', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    const contactLink = wrapper.find('a[href="mailto:support@parlemoiapp.com"]')
    expect(contactLink.exists()).toBe(true)
    expect(contactLink.text()).toBe('Contact')
  })

  it('displays copyright notice', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    expect(wrapper.text()).toContain('2026 ParleMoi')
    expect(wrapper.text()).toContain('Parlifica Inc.')
  })

  it('has legal nav with aria-label', async () => {
    const router = createTestRouter()
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    await router.isReady()
    const nav = wrapper.find('nav[aria-label="Legal"]')
    expect(nav.exists()).toBe(true)
  })
})
