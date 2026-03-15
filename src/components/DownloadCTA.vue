<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<template>
  <section id="download" class="section-pad relative overflow-hidden">
    <!-- Background orb -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange/5 blur-[150px] pointer-events-none"></div>

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="reveal">
        <h2 class="font-display text-3xl md:text-5xl font-bold text-cream" style="letter-spacing: -0.02em; line-height: 1.1;">
          Your first lesson is free.
        </h2>
        <p class="mt-5 text-lg text-text-light/50 max-w-md mx-auto">
          No credit card. No commitment. Just open it and start talking.
        </p>
      </div>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
        <a href="#" class="glow-btn inline-flex items-center gap-2.5 text-white font-medium px-7 py-3.5 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.76C19.95 6.84 17.62 8.23 17.65 11.1C17.68 14.54 20.62 15.71 20.66 15.73C20.63 15.82 20.19 17.36 19.11 18.95L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
          Download for iOS
        </a>
        <a href="#" class="inline-flex items-center gap-2.5 text-text-light/70 hover:text-text-light font-medium px-7 py-3.5 rounded-full text-sm border border-white/10 hover:border-white/20 transition-all">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
          Get for Android
        </a>
      </div>
    </div>
  </section>
</template>
