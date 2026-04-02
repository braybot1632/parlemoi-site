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
      <!-- Title band (matches other sections: label + headline, tight) -->
      <div class="text-center max-w-3xl mx-auto mb-10 md:mb-12 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Scenarios</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-4" style="letter-spacing: -0.02em;">
          Practice real conversations
        </h2>
        <p class="text-text-secondary text-base md:text-lg leading-relaxed">
          Short dialogues for everyday settings: you answer in spoken French and review how you did on pronunciation and word choice.
        </p>
      </div>

      <!-- One module: copy + preview (same Z-pattern rhythm as game simulators) -->
      <div
        class="rounded-2xl md:rounded-3xl border border-card-border bg-cream/60 p-8 md:p-10 lg:p-12 mb-14 md:mb-16 reveal"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div class="text-left lg:pt-1">
            <p class="text-sm font-medium text-orange uppercase tracking-wider mb-4">How it works</p>
            <p class="text-text-secondary leading-relaxed text-base md:text-lg mb-6">
              Each scenario is a short exchange: the other person’s line appears on screen, and you respond aloud in French.
              Afterward you get feedback on pronunciation and vocabulary, and on whether your answer fits what the situation called for.
            </p>
            <p
              class="text-sm md:text-base text-text-secondary leading-relaxed border-l-2 border-orange/40 pl-4 py-0.5"
            >
              Each one is scored on <span class="text-orange font-medium">pronunciation</span> and
              <span class="text-orange font-medium">vocabulary</span>.
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <PhoneSimulatorFrame
              :src="scenarioSimSrc"
              title="ParleMoi scenario practice chat simulator preview"
            />
          </div>
        </div>
      </div>

      <div class="divider-gradient mb-10 md:mb-12" aria-hidden="true"></div>

      <p
        class="text-center text-sm font-medium text-orange uppercase tracking-wider mb-6 md:mb-8 reveal"
      >
        Situations you can practice
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger">
        <div
          v-for="scenario in scenarios"
          :key="scenario.label"
          class="glass rounded-2xl p-6 reveal group transition-all duration-300 border border-card-border/80 bg-white/70"
        >
          <h3 class="font-display text-base font-bold text-navy mb-2">{{ scenario.label }}</h3>
          <p class="text-sm text-text-secondary leading-relaxed">{{ scenario.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
