<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(false)
onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-gradient-to-br from-deep-navy to-navy pt-28 pb-20 md:pt-36 md:pb-28">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h1
        class="font-display text-4xl md:text-6xl font-bold text-cream leading-tight transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Speak French from your<br class="hidden md:block" /> very first lesson.
      </h1>

      <p
        class="mt-6 text-lg md:text-xl text-text-light/80 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        No cartoon owls. No guilt trips. Just French — with AI tutors who treat you like an adult.
      </p>

      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-orange hover:bg-[#d6762e] text-white font-medium px-6 py-3.5 rounded-full transition-colors text-sm"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.76C19.95 6.84 17.62 8.23 17.65 11.1C17.68 14.54 20.62 15.71 20.66 15.73C20.63 15.82 20.19 17.36 19.11 18.95L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
          Download on App Store
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-cream font-medium px-6 py-3.5 rounded-full transition-colors text-sm border border-white/20"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
          Get it on Google Play
        </a>
      </div>

      <!-- Henri & Marie avatars -->
      <div
        class="mt-14 flex items-center justify-center gap-6 transition-all duration-700 delay-500"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-orange/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="w-full h-full">
              <circle cx="60" cy="60" r="60" fill="#1B2A4A"/>
              <circle cx="60" cy="60" r="56" fill="none" stroke="#243654" stroke-width="1"/>
              <text x="60" y="64" text-anchor="middle" dominant-baseline="central" font-family="Georgia, serif" font-weight="700" font-size="48" fill="#E8E4DF">H</text>
              <circle cx="96" cy="96" r="10" fill="#E8863A" stroke="#1B2A4A" stroke-width="3"/>
            </svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium text-cream">Henri</p>
            <p class="text-xs text-text-light/50">From Lyon</p>
          </div>
        </div>

        <div class="w-px h-10 bg-white/20"></div>

        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="w-full h-full">
              <circle cx="60" cy="60" r="60" fill="#1B2A4A"/>
              <circle cx="60" cy="60" r="56" fill="none" stroke="#243654" stroke-width="1"/>
              <text x="60" y="64" text-anchor="middle" dominant-baseline="central" font-family="Georgia, serif" font-weight="700" font-size="48" fill="#E8E4DF">M</text>
              <circle cx="96" cy="96" r="10" fill="#D4A853" stroke="#1B2A4A" stroke-width="3"/>
            </svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium text-cream">Marie</p>
            <p class="text-xs text-text-light/50">From Quebec</p>
          </div>
        </div>
      </div>
      <p class="mt-3 text-sm text-text-light/40">Your AI conversation partners</p>
    </div>
  </section>
</template>
