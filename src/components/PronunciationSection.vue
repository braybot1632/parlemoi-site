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
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-8" style="letter-spacing: -0.02em;">
          Know exactly how you sound
        </h2>
      </div>

      <div class="space-y-6 text-lg text-text-secondary leading-relaxed reveal">
        <p>
          Say a French word. See a number. Not a vague "good job," an actual
          score that tells you how close you got.
        </p>
        <p>
          90% and above? Move on.<br />
          Below that? The app tells you which sound was off.
          The R. The nasal vowel. The liaison you missed.
        </p>
        <p class="text-navy/80">
          Fix it. Try again. Watch the number climb.
        </p>
      </div>

    </div>
  </section>
</template>
