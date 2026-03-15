<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="philosophy" class="section-pad relative overflow-hidden">
    <!-- Subtle orb -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[120px] pointer-events-none"></div>

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Our Philosophy</p>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-cream mb-10" style="letter-spacing: -0.02em; line-height: 1.1;">
          Built different.
        </h2>
      </div>

      <div class="space-y-6 text-lg md:text-xl text-text-light/50 leading-relaxed reveal">
        <p>
          Other apps want you to tap buttons and collect points.<br class="hidden md:block" />
          We just want you to talk.
        </p>
        <p class="text-cream/80">
          So we skipped the streaks, the mascots, and the confetti.
        </p>
        <p>
          What's left? A microphone, a conversation,<br class="hidden md:block" />
          and your pronunciation getting better every day.
        </p>
        <p class="text-cream/80">
          That's it. That's the whole app.
        </p>
      </div>

      <div class="divider-gradient mt-16 mb-16"></div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 stagger">
        <div class="reveal text-center">
          <div class="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          </div>
          <h3 class="font-display font-bold text-cream mb-1">You come first</h3>
          <p class="text-sm text-text-muted">We don't trick you into opening the app</p>
        </div>
        <div class="reveal text-center">
          <div class="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 class="font-display font-bold text-cream mb-1">Respects your time</h3>
          <p class="text-sm text-text-muted">Skip a day. Skip a week. We won't nag you</p>
        </div>
        <div class="reveal text-center">
          <div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-5 h-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 class="font-display font-bold text-cream mb-1">Honest pricing</h3>
          <p class="text-sm text-text-muted">Scroll down, it's all right there</p>
        </div>
      </div>
    </div>
  </section>
</template>
