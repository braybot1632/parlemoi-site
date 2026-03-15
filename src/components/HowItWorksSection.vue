<script setup>
const steps = [
  { number: '1', title: 'Listen', description: 'Hear native French pronunciation from Henri or Marie in real conversation context.' },
  { number: '2', title: 'Speak', description: 'Record yourself saying it. No typing, no tapping — just speaking.' },
  { number: '3', title: 'Improve', description: 'Get instant pronunciation feedback with accuracy scores and gentle corrections.' },
]
</script>

<template>
  <section id="how-it-works" class="bg-warm-white py-20 md:py-28">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy">How it works</h2>
        <p class="mt-4 text-text-muted">Three steps. Every lesson.</p>
      </div>

      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="flex-1 text-center"
        >
          <div class="w-14 h-14 rounded-full bg-orange text-white font-display text-xl font-bold flex items-center justify-center mx-auto">
            {{ step.number }}
          </div>
          <h3 class="mt-5 font-display text-xl font-bold text-navy">{{ step.title }}</h3>
          <p class="mt-3 text-sm text-text-muted leading-relaxed max-w-xs mx-auto">{{ step.description }}</p>

          <!-- Connector arrow (not on last) -->
          <div v-if="i < steps.length - 1" class="hidden md:block absolute" aria-hidden="true"></div>
        </div>

        <!-- Arrows between steps (desktop) -->
      </div>

      <div class="hidden md:flex justify-between px-[calc(16.67%+1rem)] mt-[-5.5rem] mb-[3rem] pointer-events-none" aria-hidden="true">
        <svg class="w-8 h-8 text-orange/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
        <svg class="w-8 h-8 text-orange/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </div>
  </section>
</template>
