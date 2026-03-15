import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'

describe('HomeView', () => {
  it('renders the hero headline', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Learn French by')
    expect(wrapper.text()).toContain('actually speaking it.')
  })

  it('renders the features section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Everything you need to speak French')
  })

  it('renders the how it works section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Listen')
    expect(wrapper.text()).toContain('Speak')
    expect(wrapper.text()).toContain('Improve')
  })

  it('renders the pricing section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Free')
    expect(wrapper.text()).toContain('Yearly')
    expect(wrapper.text()).toContain('Monthly')
  })

  it('has all section IDs for anchor navigation', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('#hero').exists()).toBe(true)
    expect(wrapper.find('#features').exists()).toBe(true)
    expect(wrapper.find('#how-it-works').exists()).toBe(true)
    expect(wrapper.find('#pricing').exists()).toBe(true)
  })
})
