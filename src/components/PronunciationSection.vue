<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="pronunciation" class="section-pad relative">
    <div class="divider-gradient mb-16"></div>

    <div class="max-w-3xl mx-auto px-6">
      <div class="reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Pronunciation</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream mb-8" style="letter-spacing: -0.02em;">
          Know exactly how you sound
        </h2>
      </div>

      <div class="space-y-6 text-lg text-text-light/50 leading-relaxed reveal">
        <p>
          Say a French word. See a number. Not a vague "good job" — an actual
          score that tells you how close you got.
        </p>
        <p>
          90% and above? Move on.<br />
          Below that? The app tells you which sound was off.
          The R. The nasal vowel. The liaison you missed.
        </p>
        <p class="text-cream/80">
          Fix it. Try again. Watch the number climb.
        </p>
      </div>

      <!-- Visual: score example -->
      <div class="mt-10 glass rounded-2xl p-8 reveal">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm text-text-muted">Your pronunciation</span>
          <span class="text-xs text-text-muted uppercase tracking-wider">Every phrase. Every game. Scored.</span>
        </div>
        <div class="flex items-end gap-1">
          <div v-for="(h, i) in [40, 55, 50, 65, 60, 72, 68, 78, 75, 85, 82, 88, 90, 92]" :key="i"
            class="flex-1 rounded-t-sm transition-all"
            :class="h >= 85 ? 'bg-success/60' : 'bg-orange/40'"
            :style="{ height: h + '%', maxHeight: h * 0.6 + 'px' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
