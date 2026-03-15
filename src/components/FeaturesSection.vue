<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="features" class="section-pad relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Features</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em;">
          Everything you need to speak French
        </h2>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 stagger">
        <!-- Large: Speak from Day One -->
        <div class="glass rounded-2xl p-8 md:col-span-2 md:row-span-2 reveal group transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/15 transition-colors">
            <svg class="w-6 h-6 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
            </svg>
          </div>
          <h3 class="font-display text-2xl font-bold text-cream mb-3">Speak from Day One</h3>
          <p class="text-text-light/50 leading-relaxed max-w-sm">
            No flashcards. No multiple choice. Every single exercise puts your voice first. You open the app, and you speak French. That simple.
          </p>
          <div class="mt-8 glass rounded-xl p-4 max-w-xs">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span class="text-xs text-text-muted">Recording...</span>
            </div>
            <div class="flex gap-0.5">
              <div v-for="i in 24" :key="i" class="flex-1 rounded-full bg-orange/40" :style="{ height: Math.random() * 20 + 4 + 'px' }"></div>
            </div>
          </div>
        </div>

        <!-- AI Conversation -->
        <div class="glass rounded-2xl p-6 md:col-span-2 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
            <svg class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">AI Conversation Partners</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Practice with AI tutors who respond naturally, correct gently, and never judge. Like a patient friend who happens to be fluent.
          </p>
        </div>

        <!-- Pronunciation -->
        <div class="glass rounded-2xl p-6 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/15 transition-colors">
            <svg class="w-5 h-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Pronunciation Scoring</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Real-time accuracy feedback on every word you say.
          </p>
        </div>

        <!-- Curriculum -->
        <div class="glass rounded-2xl p-6 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/15 transition-colors">
            <svg class="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">A1 to B2 Curriculum</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Real-life scenarios: ordering coffee, giving directions, small talk.
          </p>
        </div>

        <!-- Designed for Adults -->
        <div class="glass rounded-2xl p-6 md:col-span-2 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-cream/10 flex items-center justify-center mb-4 group-hover:bg-cream/15 transition-colors">
            <svg class="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Designed for Adults</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Clean interface, respectful notifications, no manipulation. Your time is valued. Finally, a language app that doesn't feel like it was designed for a 7-year-old.
          </p>
        </div>

        <!-- Works Offline -->
        <div class="glass rounded-2xl p-6 md:col-span-2 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-navy/30 flex items-center justify-center mb-4 group-hover:bg-navy/40 transition-colors">
            <svg class="w-5 h-5 text-text-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="m2 2 20 20"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Full Offline Mode</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Download lessons for the plane, the metro, the cabin. Learn French from anywhere — connection optional.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
