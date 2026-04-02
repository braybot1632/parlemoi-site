import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the headline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('ParleMoi')
    expect(wrapper.text()).toContain('Speak and Learn.')
  })

  it('renders the subheadline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('speaking French')
  })

  it('includes Montreal and Instagram in the secondary hero band', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Built in Montreal')
    expect(wrapper.text()).toContain('@parlemoi.app')
  })

  it('renders beta signup affordances', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Join the Beta')
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
  })

  it('has section id "hero"', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('has gradient mesh orbs for background', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.mesh-gradient').exists()).toBe(true)
    expect(wrapper.findAll('.orb').length).toBe(3)
  })
})
