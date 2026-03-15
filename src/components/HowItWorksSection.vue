<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const steps = [
  {
    number: '01',
    title: 'Listen',
    description: 'Hear native French pronunciation in real conversation context. Not isolated vocabulary — full sentences you will actually use.',
    color: 'orange',
  },
  {
    number: '02',
    title: 'Speak',
    description: 'Record yourself saying it back. No typing, no tapping, no multiple choice. Just your voice, the microphone, and French.',
    color: 'gold',
  },
  {
    number: '03',
    title: 'Improve',
    description: 'Get instant pronunciation feedback with accuracy scores. See exactly which sounds to work on, then try again.',
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
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em;">
          Three steps. Every lesson.
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
            <h3 class="font-display text-xl md:text-2xl font-bold text-cream mb-2">{{ step.title }}</h3>
            <p class="text-text-light/50 leading-relaxed max-w-lg">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
