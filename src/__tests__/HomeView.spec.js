import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../views/HomeView.vue'

describe('HomeView', () => {
  it('renders the hero headline', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('ParleMoi')
    expect(wrapper.text()).toContain('Speak and Learn.')
    expect(wrapper.text()).toContain('The app that gets you speaking French.')
  })

  it('renders the features section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Features')
    expect(wrapper.text()).toContain('And a few more things')
  })

  it('renders the how it works section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('How a lesson works')
    expect(wrapper.text()).toContain('Listen to a lesson')
    expect(wrapper.text()).toContain('Say it out loud')
  })

  it('has all section IDs for anchor navigation', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('#hero').exists()).toBe(true)
    expect(wrapper.find('#features').exists()).toBe(true)
    expect(wrapper.find('#how-it-works').exists()).toBe(true)
  })
})
