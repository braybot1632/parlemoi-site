import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialProofBar from '../components/SocialProofBar.vue'

describe('SocialProofBar', () => {
  it('renders all 4 metrics', () => {
    const wrapper = mount(SocialProofBar)
    expect(wrapper.text()).toContain('50K+')
    expect(wrapper.text()).toContain('94%')
    expect(wrapper.text()).toContain('4.8')
    expect(wrapper.text()).toContain('A1-B2')
  })

  it('renders metric labels', () => {
    const wrapper = mount(SocialProofBar)
    expect(wrapper.text()).toContain('Conversations practiced')
    expect(wrapper.text()).toContain('Avg pronunciation score')
    expect(wrapper.text()).toContain('App Store rating')
    expect(wrapper.text()).toContain('CEFR levels covered')
  })

  it('renders a star icon for the rating metric', () => {
    const wrapper = mount(SocialProofBar)
    const svgs = wrapper.findAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(1)
  })

  it('has 4 metric items in the grid', () => {
    const wrapper = mount(SocialProofBar)
    const items = wrapper.findAll('.reveal')
    expect(items.length).toBe(4)
  })
})
