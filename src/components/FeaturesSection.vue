<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="features" class="section-pad relative">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Core Features</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy" style="letter-spacing: -0.02em;">
          Everything you need to speak French
        </h2>
      </div>

      <div class="space-y-8 max-w-2xl">
        <!-- Lessons -->
        <div class="reveal flex gap-6 items-start">
          <div class="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
            <svg class="w-8 h-8 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-navy mb-2">Structured Lessons</h3>
            <p class="text-text-secondary leading-relaxed">
              Learn through audiobook-style lessons with native speakers. Progress from A1 to B2 across 60+ carefully designed lessons.
            </p>
          </div>
        </div>

        <!-- AI Chat Room -->
        <div class="reveal flex gap-6 items-start">
          <div class="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
            <svg class="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-navy mb-2">AI Chat Room</h3>
            <p class="text-text-secondary leading-relaxed">
              Practice real conversations with AI tutors. Get instant feedback on your pronunciation and corrections.
            </p>
          </div>
        </div>

        <!-- Practice Scenarios -->
        <div class="reveal flex gap-6 items-start">
          <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center shrink-0">
            <svg class="w-8 h-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-navy mb-2">Scenario Practice</h3>
            <p class="text-text-secondary leading-relaxed">
              Handle real-world situations like ordering coffee or booking a hotel. Apply what you've learned in context.
            </p>
          </div>
        </div>

        <!-- Games -->
        <div class="reveal flex gap-6 items-start">
          <div class="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
            <svg class="w-8 h-8 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
            </svg>
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-navy mb-2">Voice Games</h3>
            <p class="text-text-secondary leading-relaxed">
              Engaging games designed to get you speaking out loud. Build confidence through consistent practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
