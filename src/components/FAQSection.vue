<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const faqs = [
  {
    question: 'Is it really free?',
    answer: 'The first two lessons and 10 daily conversation messages are free forever. No credit card required. Premium unlocks the full curriculum and unlimited conversations.',
  },
  {
    question: 'Do I need to know any French?',
    answer: 'No. Lesson 1 starts with "Bonjour." We assume zero knowledge.',
  },
  {
    question: 'How is this different from Duolingo?',
    answer: 'Duolingo teaches you to recognize French by tapping answers. ParleMoi teaches you to speak French by using your voice. Every exercise requires you to say something out loud.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'Lessons and voice games work without internet. The live conversation feature needs WiFi.',
  },
  {
    question: 'What level will I reach?',
    answer: 'A1 (complete beginner) to B2 (upper intermediate). Enough for everyday conversations, travel, and basic professional situations.',
  },
  {
    question: 'Who made this?',
    answer: 'A developer in Montreal who got tired of language apps that don\'t make you speak.',
  },
]

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="section-pad relative">
    <div class="divider-gradient mb-16"></div>

    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-cream" style="letter-spacing: -0.02em;">
          Questions
        </h2>
      </div>

      <div class="space-y-3 stagger">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="glass rounded-xl overflow-hidden reveal"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
          >
            <h3 class="font-display font-bold text-cream pr-4">{{ faq.question }}</h3>
            <svg
              class="w-5 h-5 text-text-muted shrink-0 transition-transform duration-300"
              :class="{ 'rotate-45': openIndex === index }"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-40"
            leave-from-class="opacity-100 max-h-40"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openIndex === index" class="overflow-hidden">
              <p class="px-6 pb-6 text-text-light/50 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
