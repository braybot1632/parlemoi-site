<script setup>
import { useReveal } from '../composables/useReveal'

useReveal()
</script>

<template>
  <!-- Audiobook lessons intro (nav: Lessons); lives inside SimulatorShowcaseSection container -->
  <div id="audiobook-lessons" class="text-center pb-12 md:pb-16 reveal scroll-mt-24">
    <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Audiobook Lessons</p>
    <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-6" style="letter-spacing: -0.02em;">
      Lessons that teach before they test
    </h2>
    <div class="max-w-3xl mx-auto space-y-6 text-lg text-text-secondary leading-relaxed text-left md:text-center">
      <p>
        Each lesson starts like an audiobook. A natural voice introduces
        the topic, reads the phrases aloud, and explains when you'd use
        them.
      </p>
      <p>
        You practice the phrases and get instant feedback on your pronunciation. Hear exactly what needs work, then try again until you nail it.
      </p>
    </div>
  </div>
</template>
