<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const problems = [
  'Gamified apps that reward tapping, not speaking',
  'Cartoon mascots that guilt-trip you about streaks',
  'Multiple choice busywork that builds zero fluency',
  'Hidden pricing behind paywalls and dark patterns',
]

const solutions = [
  'Every exercise starts with your voice',
  'A clean interface that respects your time',
  'AI conversations that adapt to your level',
  'All pricing visible, always, no surprises',
]
</script>

<template>
  <section class="section-pad relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">The problem</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em; text-wrap: balance;">
          Most language apps are built to<br class="hidden md:block" />
          keep you playing, not speaking.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Problems -->
        <div class="glass rounded-2xl p-8 reveal">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center">
              <svg class="w-4 h-4 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <h3 class="text-sm font-medium text-text-muted uppercase tracking-wider">What you get elsewhere</h3>
          </div>
          <ul class="space-y-4">
            <li v-for="p in problems" :key="p" class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-error/40 mt-2 shrink-0"></span>
              <span class="text-text-light/50 leading-relaxed">{{ p }}</span>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="glass rounded-2xl p-8 border-orange/20 reveal">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center">
              <svg class="w-4 h-4 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 class="text-sm font-medium text-orange uppercase tracking-wider">What ParleMoi does</h3>
          </div>
          <ul class="space-y-4">
            <li v-for="s in solutions" :key="s" class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-orange/60 mt-2 shrink-0"></span>
              <span class="text-text-light/80 leading-relaxed">{{ s }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
