import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HowItWorksSection from '../components/HowItWorksSection.vue'

describe('HowItWorksSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(HowItWorksSection)
    expect(wrapper.text()).toContain('Three steps. Every lesson.')
  })

  it('has section id "how-it-works"', () => {
    const wrapper = mount(HowItWorksSection)
    expect(wrapper.find('#how-it-works').exists()).toBe(true)
  })

  it('renders all 3 steps with titles', () => {
    const wrapper = mount(HowItWorksSection)
    expect(wrapper.text()).toContain('Listen')
    expect(wrapper.text()).toContain('Speak')
    expect(wrapper.text()).toContain('Improve')
  })

  it('renders step numbers', () => {
    const wrapper = mount(HowItWorksSection)
    expect(wrapper.text()).toContain('01')
    expect(wrapper.text()).toContain('02')
    expect(wrapper.text()).toContain('03')
  })

  it('renders step descriptions', () => {
    const wrapper = mount(HowItWorksSection)
    expect(wrapper.text()).toContain('Hear native French pronunciation')
    expect(wrapper.text()).toContain('Record yourself saying it back')
    expect(wrapper.text()).toContain('instant pronunciation feedback')
  })

  it('renders 3 step cards', () => {
    const wrapper = mount(HowItWorksSection)
    const cards = wrapper.findAll('.glass.rounded-2xl')
    expect(cards.length).toBe(3)
  })
})
