import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '../components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders the ParleMoi brand name', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Parle')
    expect(wrapper.text()).toContain('Moi')
  })

  it('renders desktop navigation links', () => {
    const wrapper = mount(AppHeader)
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.text()).toContain('Games')
    expect(nav.text()).toContain('Lessons')
    expect(nav.text()).toContain('Scenarios')
    expect(nav.text()).toContain('Features')
    expect(nav.text()).toContain('Beta')
  })

  it('has a mobile menu toggle button with aria-label', () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.find('button[aria-label="Toggle menu"]')
    expect(toggle.exists()).toBe(true)
  })

  it('mobile menu is hidden by default', () => {
    const wrapper = mount(AppHeader)
    // Mobile menu panel should not be rendered when menuOpen is false
    const mobileLinks = wrapper.findAll('button').filter((b) => b.classes().includes('text-left'))
    expect(mobileLinks.length).toBe(0)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.find('button[aria-label="Toggle menu"]')

    await toggle.trigger('click')

    // Mobile menu should now show navigation items
    const mobilePanel = wrapper.find('.md\\:hidden.bg-white\\/95')
    expect(mobilePanel.exists()).toBe(true)
    expect(mobilePanel.text()).toContain('Features')
    expect(mobilePanel.text()).toContain('Beta signup')
  })

  it('closes mobile menu on second hamburger click', async () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.find('button[aria-label="Toggle menu"]')

    await toggle.trigger('click')
    await toggle.trigger('click')

    const mobilePanel = wrapper.find('.md\\:hidden.bg-white\\/95')
    expect(mobilePanel.exists()).toBe(false)
  })

  it('has a fixed header element', () => {
    const wrapper = mount(AppHeader)
    const header = wrapper.find('header')
    expect(header.classes()).toContain('fixed')
    expect(header.classes()).toContain('z-50')
  })

  it('does not have scroll class when not scrolled', () => {
    const wrapper = mount(AppHeader)
    const header = wrapper.find('header')
    expect(header.classes()).not.toContain('bg-darkest/80')
  })
})
