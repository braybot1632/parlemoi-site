<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const games = [
  {
    name: 'Wall Runner',
    description: 'A wall races toward you with a French word on it. Say it correctly to pass through. Walls come faster the further you get.',
    color: 'orange',
  },
  {
    name: 'Word Drop',
    description: 'French words fall from the sky. Say them before they hit the ground. Miss three and it\'s over.',
    color: 'gold',
  },
  {
    name: 'Echo Chain',
    description: 'Repeat after the voice. One phrase. Then two. Then three. The chain keeps growing. How long before you break it?',
    color: 'success',
  },
  {
    name: 'Survival Mode',
    description: 'All games. Mixed together. 3 lives. How far can you go?',
    color: 'orange',
  },
]
</script>

<template>
  <section id="voice-games" class="section-pad relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Voice Games</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream mb-4" style="letter-spacing: -0.02em;">
          Say it to play it
        </h2>
        <p class="text-text-light/50 max-w-lg mx-auto">
          These aren't quizzes. Every game uses your voice. Every game teaches real French.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        <div
          v-for="game in games"
          :key="game.name"
          class="glass rounded-2xl p-6 reveal group transition-all duration-300"
        >
          <h3 class="font-display text-lg font-bold text-cream mb-2">{{ game.name }}</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">{{ game.description }}</p>
        </div>
      </div>

      <p class="mt-8 text-center text-text-muted text-sm reveal">+ many more</p>
    </div>
  </section>
</template>
