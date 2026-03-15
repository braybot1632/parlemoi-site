<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const facts = [
  { value: 'Free forever plan', icon: null },
  { value: 'A1 to B2 curriculum', icon: null },
  { value: '16+ roleplay scenarios', icon: null },
  { value: '6 voice games', icon: null },
  { value: 'Works offline', icon: null },
]
</script>

<template>
  <section class="relative border-y border-white/5 bg-darkest/60 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 stagger">
        <span
          v-for="fact in facts"
          :key="fact.value"
          class="reveal text-sm text-text-light/50 tracking-wide"
        >
          {{ fact.value }}
        </span>
      </div>
    </div>
  </section>
</template>
