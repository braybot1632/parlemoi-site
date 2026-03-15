import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DownloadCTA from '../components/DownloadCTA.vue'

describe('DownloadCTA', () => {
  it('renders the CTA headline', () => {
    const wrapper = mount(DownloadCTA)
    expect(wrapper.text()).toContain('Ready to speak French?')
  })

  it('has section id "download"', () => {
    const wrapper = mount(DownloadCTA)
    expect(wrapper.find('#download').exists()).toBe(true)
  })

  it('renders the supporting text', () => {
    const wrapper = mount(DownloadCTA)
    expect(wrapper.text()).toContain('Download ParleMoi and have your first conversation today')
    expect(wrapper.text()).toContain('No credit card required')
  })

  it('has iOS and Android download links', () => {
    const wrapper = mount(DownloadCTA)
    expect(wrapper.text()).toContain('Download for iOS')
    expect(wrapper.text()).toContain('Get for Android')
  })

  it('has 2 download link elements', () => {
    const wrapper = mount(DownloadCTA)
    const links = wrapper.findAll('a')
    expect(links.length).toBe(2)
  })
})
