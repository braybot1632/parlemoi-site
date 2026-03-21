<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section class="section-pad relative">
    <div class="max-w-3xl mx-auto px-6">
      <div class="reveal">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy mb-8" style="letter-spacing: -0.02em; text-wrap: balance;">
          You've tried the other apps.
        </h2>
      </div>

      <div class="space-y-6 text-lg text-text-secondary leading-relaxed reveal">
        <p>
          You tapped buttons for six months and still can't order a coffee
          in French. That's not your fault, those apps taught you to
          recognize French, not speak it.
        </p>
        <p class="text-navy/80">
          ParleMoi is the opposite. Every exercise, every game, every
          lesson starts and ends with your voice. You say it out loud.
          The app listens. And you hear yourself getting better.
        </p>
      </div>

      <div class="mt-10 glass rounded-2xl p-8 reveal">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg class="w-4 h-4 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <p class="text-text-secondary">Other apps test if you can <span class="text-navy/70">read</span> French.</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg class="w-4 h-4 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p class="text-navy/80">ParleMoi tests if you can <span class="text-orange">say</span> it.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
