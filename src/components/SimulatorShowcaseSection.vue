<script setup>
import { useReveal } from '../composables/useReveal'
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
      <!-- Merged from AudiobookLessonsSection + VoiceGamesSection intros -->
      <div id="audiobook-lessons" class="text-center mb-16 reveal scroll-mt-24">
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

        <div id="voice-games" class="mt-12 max-w-xl mx-auto border-t border-card-border pt-10 scroll-mt-24">
          <p class="text-sm text-orange font-medium tracking-wider uppercase mb-3">Voice Games</p>
          <p class="font-display text-2xl md:text-3xl font-bold text-navy mb-4" style="letter-spacing: -0.02em;">
            Say it to play it
          </p>
          <p class="text-text-secondary leading-relaxed">
            We believe that providing engaging games will accelerate the learning experience.
          </p>
        </div>
      </div>

      <!-- Z-pattern demos -->
      <div class="space-y-16">
        <article
          v-for="(row, index) in demoRows"
          :key="row.id"
          class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
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
      </div>
    </div>
  </section>
</template>
