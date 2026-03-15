import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FeaturesSection from '../components/FeaturesSection.vue'

describe('FeaturesSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(FeaturesSection)
    expect(wrapper.text()).toContain('Everything you need to speak French')
  })

  it('has section id "features"', () => {
    const wrapper = mount(FeaturesSection)
    expect(wrapper.find('#features').exists()).toBe(true)
  })

  it('renders all 6 feature cards', () => {
    const wrapper = mount(FeaturesSection)
    expect(wrapper.text()).toContain('Speak from Day One')
    expect(wrapper.text()).toContain('AI Conversation Partners')
    expect(wrapper.text()).toContain('Pronunciation Scoring')
    expect(wrapper.text()).toContain('A1 to B2 Curriculum')
    expect(wrapper.text()).toContain('Designed for Adults')
    expect(wrapper.text()).toContain('Full Offline Mode')
  })

  it('renders feature descriptions', () => {
    const wrapper = mount(FeaturesSection)
    expect(wrapper.text()).toContain('Every single exercise puts your voice first')
    expect(wrapper.text()).toContain('Like a patient friend who happens to be fluent')
    expect(wrapper.text()).toContain('Real-time accuracy feedback')
    expect(wrapper.text()).toContain('ordering coffee, giving directions')
    expect(wrapper.text()).toContain('language app that doesn\'t feel like it was designed for a 7-year-old')
    expect(wrapper.text()).toContain('connection optional')
  })

  it('has bento grid layout with correct card count', () => {
    const wrapper = mount(FeaturesSection)
    const cards = wrapper.findAll('.glass.rounded-2xl')
    expect(cards.length).toBe(6)
  })
})
