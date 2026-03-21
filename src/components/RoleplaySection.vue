<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const scenarios = [
  { label: 'Visiting a cafe for the first time', detail: 'The barista asks what you\'d like.' },
  { label: 'At the doctor', detail: 'You need to describe what hurts.' },
  { label: 'Checking into a hotel', detail: 'Time to get your room.' },
  { label: 'Lost without your phone', detail: 'Ask for directions in French.' },
  { label: 'At the dépanneur', detail: 'Ask for help finding what you need.' },
  { label: 'Meeting someone new', detail: 'Introduce yourself at a dinner party.' },
]
</script>

<template>
  <section id="roleplay" class="section-pad relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Roleplay Scenarios</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-4" style="letter-spacing: -0.02em;">
          Practice scenarios that occur in daily life.
        </h2>
        <p class="text-text-secondary max-w-lg mx-auto">
          Our goal is to create realistic scenarios one may encounter when living in a French speaking place. Our app will simulate these scenarios to give you the confidence to practice when you are out in the real world.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        <div
          v-for="scenario in scenarios"
          :key="scenario.label"
          class="glass rounded-2xl p-6 reveal group transition-all duration-300"
        >
          <h3 class="font-display text-base font-bold text-navy mb-1">{{ scenario.label }}</h3>
          <p class="text-sm text-text-secondary leading-relaxed">{{ scenario.detail }}</p>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-text-muted reveal">
        Each one scored on pronunciation, vocabulary, and whether you got what you needed.
      </p>
    </div>
  </section>
</template>
