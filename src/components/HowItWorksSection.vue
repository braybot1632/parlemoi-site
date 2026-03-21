<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const steps = [
  {
    number: '01',
    title: 'First, you listen.',
    description: 'Your lesson starts like an audiobook. A natural voice reads the phrases while the text appears on screen.',
    color: 'orange',
  },
  {
    number: '02',
    title: 'Then, you speak.',
    description: 'Say the phrases out loud. See your pronunciation score in real-time. The app tells you exactly which sounds need work.',
    color: 'gold',
  },
  {
    number: '03',
    title: 'Then, you play.',
    description: 'Voice games drill what you just learned until it sticks. The whole thing takes about ten minutes.',
    color: 'success',
  },
]
</script>

<template>
  <section id="how-it-works" class="section-pad relative">
    <div class="divider-gradient mb-16"></div>

    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">How It Works</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy" style="letter-spacing: -0.02em;">
          How a lesson works
        </h2>
      </div>

      <div class="space-y-6 stagger">
        <div
          v-for="step in steps"
          :key="step.number"
          class="glass rounded-2xl p-8 md:p-10 reveal flex flex-col md:flex-row items-start gap-6 md:gap-10 group transition-all duration-300"
        >
          <div class="shrink-0">
            <span
              class="font-display text-4xl md:text-5xl font-bold transition-colors"
              :class="{
                'text-orange/30 group-hover:text-orange/60': step.color === 'orange',
                'text-gold/30 group-hover:text-gold/60': step.color === 'gold',
                'text-success/30 group-hover:text-success/60': step.color === 'success',
              }"
            >{{ step.number }}</span>
          </div>
          <div>
            <h3 class="font-display text-xl md:text-2xl font-bold text-navy mb-2">{{ step.title }}</h3>
            <p class="text-text-secondary leading-relaxed max-w-lg">{{ step.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
