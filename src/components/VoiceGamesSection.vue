<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const games = [
  {
    name: 'Word Catch',
    description: 'French words fall from the screen. Say them before they hit the bottom. Get faster as you level up.',
    icon: 'arrow-down',
    color: 'orange',
  },
  {
    name: 'Speed Say',
    description: 'Phrases flash one at a time. Say each one correctly, as fast as you can. Beat your best time.',
    icon: 'timer',
    color: 'gold',
  },
  {
    name: 'Echo Game',
    description: "Listen to a phrase. Repeat it. The next one's longer. And the next one's longer still. How far can you go?",
    icon: 'repeat',
    color: 'success',
  },
  {
    name: 'Translation Sprint',
    description: "An English phrase appears. Say it in French. Ten phrases. Clock's ticking.",
    icon: 'languages',
    color: 'orange',
  },
  {
    name: 'Fill the Gap',
    description: '"Bonjour, je voudrais un ___" — Say the missing word. Out loud. Not tap it. Say it.',
    icon: 'text-cursor',
    color: 'gold',
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
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
            :class="{
              'bg-orange/10 group-hover:bg-orange/15': game.color === 'orange',
              'bg-gold/10 group-hover:bg-gold/15': game.color === 'gold',
              'bg-success/10 group-hover:bg-success/15': game.color === 'success',
            }"
          >
            <!-- Arrow Down -->
            <svg v-if="game.icon === 'arrow-down'" class="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
            </svg>
            <!-- Timer -->
            <svg v-if="game.icon === 'timer'" class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M10 2h4"/><path d="m20 5-1.5 1.5"/>
            </svg>
            <!-- Repeat -->
            <svg v-if="game.icon === 'repeat'" class="w-5 h-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>
            </svg>
            <!-- Languages -->
            <svg v-if="game.icon === 'languages'" class="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
            </svg>
            <!-- Text Cursor -->
            <svg v-if="game.icon === 'text-cursor'" class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"/><path d="M7 22h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H7"/><path d="M8 12h8"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">{{ game.name }}</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">{{ game.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
