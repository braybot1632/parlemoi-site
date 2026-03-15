import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PhilosophySection from '../components/PhilosophySection.vue'

describe('PhilosophySection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(PhilosophySection)
    expect(wrapper.text()).toContain('Built different.')
  })

  it('has section id "philosophy"', () => {
    const wrapper = mount(PhilosophySection)
    expect(wrapper.find('#philosophy').exists()).toBe(true)
  })

  it('renders the philosophy copy', () => {
    const wrapper = mount(PhilosophySection)
    expect(wrapper.text()).toContain('ParleMoi treats you like an adult who chose to learn')
    expect(wrapper.text()).toContain('No guilt trips about streaks')
  })

  it('renders the 3 value propositions', () => {
    const wrapper = mount(PhilosophySection)
    expect(wrapper.text()).toContain('No dark patterns')
    expect(wrapper.text()).toContain('Respects your time')
    expect(wrapper.text()).toContain('Honest pricing')
  })

  it('renders value proposition subtexts', () => {
    const wrapper = mount(PhilosophySection)
    expect(wrapper.text()).toContain('Built for learners, not metrics')
    expect(wrapper.text()).toContain('No streak anxiety or guilt')
    expect(wrapper.text()).toContain('All tiers visible, always')
  })

  it('has 3 value proposition cards', () => {
    const wrapper = mount(PhilosophySection)
    // The 3 values are in a sm:grid-cols-3 grid, each with reveal class
    const grid = wrapper.find('.grid')
    const items = grid.findAll('.reveal')
    expect(items.length).toBe(3)
  })
})
