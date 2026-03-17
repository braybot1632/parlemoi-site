<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="audiobook-lessons" class="section-pad relative">
    <div class="divider-gradient mb-16"></div>

    <div class="max-w-3xl mx-auto px-6">
      <div class="reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Audiobook Lessons</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-text-dark mb-8" style="letter-spacing: -0.02em;">
          Lessons that teach before they test
        </h2>
      </div>

      <div class="space-y-6 text-lg text-text-secondary leading-relaxed reveal">
        <p>
          Each lesson starts like an audiobook. A natural voice introduces
          the topic, reads the phrases aloud, and explains when you'd use
          them.
        </p>
        <p>
          Then you practice. Say the phrases. Get a pronunciation score.
          Hear what to fix. Try again.
        </p>
        <p>
          Then you play voice games with what you just learned.
        </p>
      </div>

      <!-- Visual: lesson flow -->
      <div class="mt-12 grid grid-cols-3 gap-4 reveal">
        <div class="glass rounded-xl p-5 text-center">
          <div class="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-4 h-4 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <p class="text-xs text-text-muted font-medium uppercase tracking-wider">Listen</p>
        </div>
        <div class="glass rounded-xl p-5 text-center">
          <div class="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            </svg>
          </div>
          <p class="text-xs text-text-muted font-medium uppercase tracking-wider">Speak</p>
        </div>
        <div class="glass rounded-xl p-5 text-center">
          <div class="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>
            </svg>
          </div>
          <p class="text-xs text-text-muted font-medium uppercase tracking-wider">Play</p>
        </div>
      </div>

      <p class="mt-8 text-text-muted text-sm reveal">
        Other apps throw you into a quiz on day one. ParleMoi teaches you first.
      </p>
    </div>
  </section>
</template>
