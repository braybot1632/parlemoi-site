import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PricingSection from '../components/PricingSection.vue'

describe('PricingSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('Simple. Transparent. No surprises.')
  })

  it('has section id "pricing"', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.find('#pricing').exists()).toBe(true)
  })

  it('renders all 4 pricing tiers', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('Free')
    expect(wrapper.text()).toContain('Monthly')
    expect(wrapper.text()).toContain('Yearly')
    expect(wrapper.text()).toContain('Lifetime')
  })

  it('renders correct prices for each tier', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('$0')
    expect(wrapper.text()).toContain('$5.99')
    expect(wrapper.text()).toContain('$39.99')
    expect(wrapper.text()).toContain('$79.99')
  })

  it('renders billing periods', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('forever')
    expect(wrapper.text()).toContain('/month')
    expect(wrapper.text()).toContain('/year')
    expect(wrapper.text()).toContain('one-time')
  })

  it('shows savings text on the yearly plan', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('Save 44% vs monthly')
  })

  it('renders badges: "Best Value" on Yearly and "Pay Once" on Lifetime', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('Best Value')
    expect(wrapper.text()).toContain('Pay Once')
  })

  it('renders CTA buttons for each tier', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('Get Started')
    expect(wrapper.text()).toContain('Start Learning')
    expect(wrapper.text()).toContain('Start Free Trial')
    expect(wrapper.text()).toContain('Get Lifetime Access')
  })

  it('renders features for the Free tier', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('First 2 lessons')
    expect(wrapper.text()).toContain('10 AI messages per day')
  })

  it('renders features for the Yearly tier', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('7-day free trial')
    expect(wrapper.text()).toContain('Full curriculum (A1-B2)')
    expect(wrapper.text()).toContain('Unlimited AI conversations')
  })

  it('has 4 pricing cards', () => {
    const wrapper = mount(PricingSection)
    const cards = wrapper.findAll('.glass')
    // 4 pricing cards + the heading reveal div that also has glass could vary
    // Let's check by looking at plan name headings
    const planHeadings = wrapper.findAll('h3')
    expect(planHeadings.length).toBe(4)
  })

  it('highlights the Yearly plan with special styling', () => {
    const wrapper = mount(PricingSection)
    const highlightedCard = wrapper.find('.border-orange\\/30')
    expect(highlightedCard.exists()).toBe(true)
    expect(highlightedCard.text()).toContain('Yearly')
  })

  it('shows USD billing note', () => {
    const wrapper = mount(PricingSection)
    expect(wrapper.text()).toContain('All prices in USD')
  })
})
