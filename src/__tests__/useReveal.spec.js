import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useReveal } from '../composables/useReveal'

// Test wrapper component that uses the composable
const RevealTestComponent = defineComponent({
  setup() {
    useReveal()
    return {}
  },
  template: `
    <div>
      <div class="reveal" id="item-1">Item 1</div>
      <div class="reveal" id="item-2">Item 2</div>
      <div class="no-reveal" id="item-3">Item 3</div>
    </div>
  `,
})

describe('useReveal', () => {
  let mockObserve
  let mockUnobserve
  let mockDisconnect
  let observerCallback

  beforeEach(() => {
    mockObserve = vi.fn()
    mockUnobserve = vi.fn()
    mockDisconnect = vi.fn()

    // Mock IntersectionObserver, must use function keyword for new-ability
    globalThis.IntersectionObserver = vi.fn(function (callback) {
      observerCallback = callback
      this.observe = mockObserve
      this.unobserve = mockUnobserve
      this.disconnect = mockDisconnect
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('creates an IntersectionObserver on mount', () => {
    mount(RevealTestComponent, { attachTo: document.body })
    expect(globalThis.IntersectionObserver).toHaveBeenCalledOnce()
  })

  it('observes all elements with .reveal class', () => {
    mount(RevealTestComponent, { attachTo: document.body })
    // Should observe 2 elements (the ones with class "reveal")
    expect(mockObserve).toHaveBeenCalledTimes(2)
  })

  it('does not observe elements without .reveal class', () => {
    mount(RevealTestComponent, { attachTo: document.body })
    const observedElements = mockObserve.mock.calls.map((c) => c[0])
    const hasNonReveal = observedElements.some((el) => el.id === 'item-3')
    expect(hasNonReveal).toBe(false)
  })

  it('adds "visible" class when element intersects', () => {
    const wrapper = mount(RevealTestComponent, { attachTo: document.body })
    const target = wrapper.find('#item-1').element

    // Simulate intersection
    observerCallback([{ isIntersecting: true, target }])

    expect(target.classList.contains('visible')).toBe(true)
  })

  it('unobserves element after it becomes visible', () => {
    const wrapper = mount(RevealTestComponent, { attachTo: document.body })
    const target = wrapper.find('#item-1').element

    observerCallback([{ isIntersecting: true, target }])

    expect(mockUnobserve).toHaveBeenCalledWith(target)
  })

  it('does not add "visible" when not intersecting', () => {
    const wrapper = mount(RevealTestComponent, { attachTo: document.body })
    const target = wrapper.find('#item-1').element

    observerCallback([{ isIntersecting: false, target }])

    expect(target.classList.contains('visible')).toBe(false)
  })

  it('disconnects observer on unmount', () => {
    const wrapper = mount(RevealTestComponent, { attachTo: document.body })
    wrapper.unmount()
    expect(mockDisconnect).toHaveBeenCalledOnce()
  })

  it('uses correct observer options', () => {
    mount(RevealTestComponent, { attachTo: document.body })
    const options = globalThis.IntersectionObserver.mock.calls[0][1]
    expect(options.threshold).toBe(0.1)
    expect(options.rootMargin).toBe('0px 0px -40px 0px')
  })

  it('falls back to adding "visible" directly when IntersectionObserver is unavailable', () => {
    // The composable checks typeof IntersectionObserver === 'undefined'
    // We need to fully remove it from the environment
    const saved = globalThis.IntersectionObserver
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      value: undefined,
      writable: true,
      configurable: true,
    })

    const wrapper = mount(RevealTestComponent, { attachTo: document.body })

    // All .reveal elements should get visible class immediately
    const item1 = wrapper.find('#item-1').element
    const item2 = wrapper.find('#item-2').element
    expect(item1.classList.contains('visible')).toBe(true)
    expect(item2.classList.contains('visible')).toBe(true)

    // Restore
    globalThis.IntersectionObserver = saved
  })
})
