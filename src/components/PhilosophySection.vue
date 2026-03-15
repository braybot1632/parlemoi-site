<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="why" class="section-pad relative overflow-hidden">
    <!-- Subtle orb -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[120px] pointer-events-none"></div>

    <div class="relative max-w-3xl mx-auto px-6">
      <div class="reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Why This Exists</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream mb-10" style="letter-spacing: -0.02em; line-height: 1.1;">
          We tried every French app.
        </h2>
      </div>

      <div class="space-y-6 text-lg md:text-xl text-text-light/50 leading-relaxed reveal">
        <p>
          After months of daily practice, we still couldn't order a coffee.
        </p>
        <p>
          The problem was simple: those apps taught us to recognize French.
          Tap the right answer, match the pairs, fill in the blank.
          None of them made us actually open our mouths and speak.
        </p>
        <p class="text-cream/80">
          So we built ParleMoi. Every exercise starts with your voice.
          Every game requires you to say something out loud.
          Every lesson teaches before it tests.
        </p>
        <p>
          There are no streaks to protect. No push notification guilting
          you for skipping a day. You open it when you want to practice.
          You close it when you're done.
        </p>
      </div>
    </div>
  </section>
</template>
