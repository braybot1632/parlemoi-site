import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'

describe('HomeView', () => {
  it('renders the app name', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('ParleMoi')
  })

  it('renders the tagline', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Learn French by speaking it.')
  })

  it('has the heading styled correctly', () => {
    const wrapper = mount(HomeView)
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('ParleMoi')
  })

  it('has a description paragraph', () => {
    const wrapper = mount(HomeView)
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.text()).toBe('Learn French by speaking it.')
  })
})
