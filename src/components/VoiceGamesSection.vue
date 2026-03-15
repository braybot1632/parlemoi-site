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
    name: 'Speed Say',
    description: 'A phrase flashes on screen. Say it. The next one appears. How fast can you clear them all?',
    color: 'success',
  },
  {
    name: 'Echo Chain',
    description: 'Repeat after the voice. One phrase. Then two. Then three. The chain keeps growing. How long before you break it?',
    color: 'orange',
  },
  {
    name: 'Translation Sprint',
    description: 'An English phrase appears. Say it in French. You have five seconds. Then four. Then three.',
    color: 'gold',
  },
  {
    name: 'Fill the Gap',
    description: 'A sentence plays with one word missing. Say the missing word. Out loud. Not tap it.',
    color: 'success',
  },
  {
    name: 'Pronunciation Duel',
    description: 'Two similar-sounding words appear. "Dessus" or "dessous"? Listen. Pick the right one. Then say it yourself.',
    color: 'orange',
  },
  {
    name: 'Sentence Builder',
    description: 'Scrambled French words on screen. Say them in the right order to build the sentence.',
    color: 'gold',
  },
  {
    name: 'Rapid Fire',
    description: 'A category appears: "Food." You have 30 seconds. Say as many French words as you can. Go.',
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
          Games you play with your mouth
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
    </div>
  </section>
</template>
