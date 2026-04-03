<script setup>
import { useReveal } from '../composables/useReveal'
import LessonSection from './LessonSection.vue'
import PhoneSimulatorFrame from './PhoneSimulatorFrame.vue'

useReveal()

const demoRows = [
  {
    id: 'word-drop',
    eyebrow: 'Voice Games',
    title: 'Word Drop',
    description:
      'Words appear on screen. Say each one in French. Miss three and the round ends.',
    src: '/simulators/worddrop.html?embed=1&autoplay=1&loop=1&delay=850',
    titleForFrame: 'ParleMoi Word Drop simulator preview',
  },
  {
    id: 'telephone',
    eyebrow: 'Voice Games',
    title: 'Telephone Practice',
    description:
      'A phone number appears. Say every digit in French. Practice the numbers you\'ll actually need.',
    src: '/simulators/telephone.html?embed=1&autoplay=1&loop=1&delay=850',
    titleForFrame: 'ParleMoi Telephone Practice simulator preview',
  },
]
</script>

<template>
  <section id="simulator-showcase" class="section-pad relative">
    <div class="max-w-6xl mx-auto px-6">
      <LessonSection />

      <!-- Break between “lessons story” and game demos (avoids phone mockup visually colliding with copy above) -->
      <div class="max-w-2xl mx-auto px-4 mb-2" aria-hidden="true">
        <div class="h-px bg-gradient-to-r from-transparent via-card-border to-transparent opacity-90"></div>
      </div>

      <!-- Z-pattern demos (nav: Games) -->
      <div id="voice-games" class="pt-12 md:pt-16 space-y-20 md:space-y-24 scroll-mt-24">
        <article
          v-for="(row, index) in demoRows"
          :key="row.id"
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"
        >
          <div
            class="reveal"
            :class="index % 2 === 0 ? 'lg:order-1 text-left' : 'lg:order-2 text-left lg:text-right'"
          >
            <p class="text-sm text-orange font-medium tracking-wider uppercase mb-3">{{ row.eyebrow }}</p>
            <h3 class="font-display text-2xl md:text-3xl font-bold text-navy" style="letter-spacing: -0.02em;">
              {{ row.title }}
            </h3>

            <p class="mt-4 text-text-secondary leading-relaxed">
              {{ row.description }}
            </p>
          </div>

          <div
            class="flex justify-center reveal"
            :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
          >
            <PhoneSimulatorFrame
              :src="row.src"
              :title="row.titleForFrame"
            />
          </div>
        </article>
      </div>

      <div class="mt-20 md:mt-24 reveal text-center">
        <p
          class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy max-w-2xl mx-auto"
          style="letter-spacing: -0.02em;"
        >
          And many <span class="text-orange">more</span>
        </p>
        <p class="mt-6 max-w-xl mx-auto text-text-secondary leading-relaxed text-base md:text-lg">
          We believe that providing engaging games will accelerate the learning experience.
        </p>
      </div>

      <div class="divider-gradient mt-16 md:mt-20" aria-hidden="true"></div>
    </div>
  </section>
</template>
