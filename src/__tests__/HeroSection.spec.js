import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '../components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the headline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Learn French by')
    expect(wrapper.text()).toContain('actually speaking it.')
  })

  it('renders the subheadline', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Real conversations with AI tutors')
    expect(wrapper.text()).toContain('No cartoon owls')
  })

  it('renders the availability badge', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Now Available on iOS and Android')
  })

  it('has iOS and Android download links', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Download for iOS')
    expect(wrapper.text()).toContain('Get for Android')
  })

  it('has section id "hero"', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('#hero').exists()).toBe(true)
  })

  it('has the scroll indicator', () => {
    const wrapper = mount(HeroSection)
    const indicator = wrapper.find('.animate-bounce')
    expect(indicator.exists()).toBe(true)
  })

  it('has gradient mesh orbs for background', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('.mesh-gradient').exists()).toBe(true)
    expect(wrapper.findAll('.orb').length).toBe(3)
  })
})
