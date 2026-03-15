import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProblemSolution from '../components/ProblemSolution.vue'

describe('ProblemSolution', () => {
  it('renders section heading', () => {
    const wrapper = mount(ProblemSolution)
    expect(wrapper.text()).toContain('keep you playing, not speaking')
  })

  it('renders all 4 problems', () => {
    const wrapper = mount(ProblemSolution)
    expect(wrapper.text()).toContain('Gamified apps that reward tapping, not speaking')
    expect(wrapper.text()).toContain('Cartoon mascots that guilt-trip you about streaks')
    expect(wrapper.text()).toContain('Multiple choice busywork that builds zero fluency')
    expect(wrapper.text()).toContain('Hidden pricing behind paywalls and dark patterns')
  })

  it('renders all 4 solutions', () => {
    const wrapper = mount(ProblemSolution)
    expect(wrapper.text()).toContain('Every exercise starts with your voice')
    expect(wrapper.text()).toContain('A clean interface that respects your time')
    expect(wrapper.text()).toContain('AI conversations that adapt to your level')
    expect(wrapper.text()).toContain('All pricing visible, always, no surprises')
  })

  it('has "What you get elsewhere" and "What ParleMoi does" headers', () => {
    const wrapper = mount(ProblemSolution)
    expect(wrapper.text()).toContain('What you get elsewhere')
    expect(wrapper.text()).toContain('What ParleMoi does')
  })

  it('renders two comparison panels', () => {
    const wrapper = mount(ProblemSolution)
    const panels = wrapper.findAll('.glass.rounded-2xl')
    expect(panels.length).toBe(2)
  })
})
