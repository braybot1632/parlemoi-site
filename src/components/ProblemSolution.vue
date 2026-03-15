<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const problems = [
  'Apps that reward tapping buttons instead of speaking',
  'Streak guilt and mascots that nag you to come back',
  'Multiple choice busywork that never builds fluency',
  'Pricing hidden behind walls and confusing tiers',
]

const solutions = [
  'Every exercise starts with your voice',
  'A quiet app that lets you focus',
  'Conversations that get harder as you do',
  'All pricing visible — scroll down and look',
]
</script>

<template>
  <section class="section-pad relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Why we're different</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em; text-wrap: balance;">
          Most language apps want you<br class="hidden md:block" />
          playing games. We want you talking.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Problems -->
        <div class="glass rounded-2xl p-8 reveal">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center">
              <svg class="w-4 h-4 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <h3 class="text-sm font-medium text-text-muted uppercase tracking-wider">Sound familiar?</h3>
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
            <h3 class="text-sm font-medium text-orange uppercase tracking-wider">How ParleMoi feels</h3>
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
