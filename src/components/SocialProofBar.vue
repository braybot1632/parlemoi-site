<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const facts = [
  { value: 'Lessons based on A1 to B2 levels', icon: null },
  { value: 'Speak through real life-scenarios', icon: null },
  { value: '10 voice games', icon: null },
]
</script>

<template>
  <section class="relative border-y border-card-border bg-cream backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 stagger">
        <span
          v-for="fact in facts"
          :key="fact.value"
          class="reveal text-sm text-text-secondary tracking-wide"
        >
          {{ fact.value }}
        </span>
      </div>
    </div>
  </section>
</template>
