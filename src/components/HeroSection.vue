<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Gradient mesh orbs -->
    <div class="mesh-gradient">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
        <span class="text-xs font-medium text-text-light/70 tracking-wide uppercase">Now Available on iOS and Android</span>
      </div>

      <!-- Headline -->
      <h1
        class="hero-headline font-display font-bold text-cream transition-all duration-1000 delay-150"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Learn French by<br />
        <span class="text-orange">actually speaking it.</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="mt-6 text-lg md:text-xl text-text-light/60 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Real conversations with AI tutors. Real pronunciation feedback.
        No cartoon owls. No guilt trips. No tricks.
      </p>

      <!-- CTA -->
      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <a href="#" class="glow-btn inline-flex items-center gap-2.5 text-white font-medium px-7 py-3.5 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.76C19.95 6.84 17.62 8.23 17.65 11.1C17.68 14.54 20.62 15.71 20.66 15.73C20.63 15.82 20.19 17.36 19.11 18.95L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
          Download for iOS
        </a>
        <a href="#" class="inline-flex items-center gap-2.5 text-text-light/70 hover:text-text-light font-medium px-7 py-3.5 rounded-full text-sm border border-white/10 hover:border-white/20 transition-all">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
          Get for Android
        </a>
      </div>

      <!-- Scroll indicator -->
      <div
        class="mt-20 transition-all duration-1000 delay-700"
        :class="visible ? 'opacity-100' : 'opacity-0'"
      >
        <div class="w-6 h-10 border border-white/20 rounded-full mx-auto flex items-start justify-center p-1.5">
          <div class="w-1 h-2.5 bg-orange/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>
