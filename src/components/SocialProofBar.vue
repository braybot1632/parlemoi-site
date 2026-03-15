<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const metrics = [
  { value: '50K+', label: 'Conversations had' },
  { value: '94%', label: 'Pronunciation accuracy' },
  { value: '4.8', label: 'App Store rating', icon: 'star' },
  { value: 'A1-B2', label: 'Beginner to confident' },
]
</script>

<template>
  <section class="relative border-y border-white/5 bg-darkest/60 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 py-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 stagger">
        <div v-for="metric in metrics" :key="metric.label" class="reveal text-center">
          <div class="font-display text-2xl md:text-3xl font-bold text-orange metric-glow">
            {{ metric.value }}
            <svg v-if="metric.icon === 'star'" class="w-5 h-5 inline-block -mt-1 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p class="mt-1 text-xs md:text-sm text-text-muted tracking-wide">{{ metric.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
