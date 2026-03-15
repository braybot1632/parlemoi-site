<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="features" class="section-pad relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Features</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em;">
          And a few more things
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
        <!-- A1 to B2 Curriculum -->
        <div class="glass rounded-2xl p-8 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/15 transition-colors">
            <svg class="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">A1 to B2 Curriculum</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            From "Bonjour" to debating politics. Sixty lessons across four
            levels, each one building on the last.
          </p>
        </div>

        <!-- Works Offline -->
        <div class="glass rounded-2xl p-8 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-navy/30 flex items-center justify-center mb-4 group-hover:bg-navy/40 transition-colors">
            <svg class="w-5 h-5 text-text-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="m2 2 20 20"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Works Offline</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Download lessons before the flight. Voice games and lesson content
            work without WiFi. Only live conversations need a connection.
          </p>
        </div>

        <!-- Chatroom -->
        <div class="glass rounded-2xl p-8 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
            <svg class="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Chatroom</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            Practice conversations in ParleMoi's chatroom for real feedback, simulating a tutor right in your phone.
          </p>
        </div>

        <!-- Pronunciation Tracked -->
        <div class="glass rounded-2xl p-8 reveal group transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/15 transition-colors">
            <svg class="w-5 h-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>
            </svg>
          </div>
          <h3 class="font-display text-lg font-bold text-cream mb-2">Your Pronunciation, Tracked</h3>
          <p class="text-sm text-text-light/50 leading-relaxed">
            See your accuracy improve over time. Not just per-word — your
            overall trend across lessons, games, and conversations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
