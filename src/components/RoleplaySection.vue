<script setup>
import { useReveal } from '../composables/useReveal'
import PhoneSimulatorFrame from './PhoneSimulatorFrame.vue'

useReveal()

const scenarios = [
  { label: 'At the Coffee Shop', detail: 'The barista asks what you\'d like.' },
  { label: 'Lost and Need Help', detail: 'You\'re lost. No GPS. Ask for directions in French.' },
  { label: 'At the Doctor', detail: 'You need to describe what hurts.' },
  { label: 'At the Restaurant', detail: 'Get a table, order food, ask for the bill.' },
  { label: 'Meeting Someone New', detail: 'Introduce yourself at a dinner party.' },
  { label: 'Getting a Taxi', detail: 'Tell the driver where you\'re going.' },
]

const scenarioSimSrc = '/simulators/scenario.html?embed=1&autoplay=1&loop=1&delay=400'
</script>

<template>
  <section id="scenarios" class="section-pad relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-10 md:mb-12 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Scenarios</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-5" style="letter-spacing: -0.02em;">
          Practice real conversations
        </h2>
        <p class="text-text-secondary max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          Realistic situations you might face in a French-speaking place. You read what the other person says, respond in French, and get pronunciation feedback, so you feel readier when it happens for real.
        </p>
      </div>

      <div class="flex justify-center mb-14 md:mb-20 reveal">
        <PhoneSimulatorFrame
          :src="scenarioSimSrc"
          title="ParleMoi scenario practice chat simulator preview"
        />
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
