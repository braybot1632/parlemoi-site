<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const games = [
  {
    name: 'Word Drop',
    description: 'French words fall from the sky. Say them before they hit the ground. Miss three and it\'s over.',
    color: 'gold',
  },
  {
    name: 'Number Drop',
    description: 'Numbers fall. Say them in French. Master everything from un to cent, including soixante-dix.',
    color: 'success',
  },
  {
    name: 'Telephone Practice',
    description: 'A phone number appears. Say every digit in French. Real practice for real conversations.',
    color: 'orange',
  },
  {
    name: 'Speed Say',
    description: 'A French phrase appears. A timer counts down. Say it before time runs out.',
    color: 'gold',
  },
]
</script>

<template>
  <section id="voice-games" class="section-pad relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Voice Games</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-4" style="letter-spacing: -0.02em;">
          Say it to play it
        </h2>
        <p class="text-text-secondary max-w-lg mx-auto">
          We believe that providing engaging games will accelerate the learning experience.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
        <div
          v-for="game in games"
          :key="game.name"
          class="glass rounded-2xl p-6 reveal group transition-all duration-300"
        >
          <h3 class="font-display text-lg font-bold text-navy mb-2">{{ game.name }}</h3>
          <p class="text-sm text-text-secondary leading-relaxed">{{ game.description }}</p>
        </div>
      </div>

      <p class="mt-10 text-center text-orange font-display text-lg font-bold reveal">+ many more</p>
    </div>
  </section>
</template>
