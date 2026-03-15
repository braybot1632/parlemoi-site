<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-card-border">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-0 text-xl font-display tracking-tight">
        <span class="text-navy font-bold">Parle</span><span class="text-orange font-bold">Moi</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <button @click="scrollTo('features')" class="text-sm text-text-dark hover:text-orange transition-colors cursor-pointer">Features</button>
        <button @click="scrollTo('how-it-works')" class="text-sm text-text-dark hover:text-orange transition-colors cursor-pointer">How It Works</button>
        <button @click="scrollTo('pricing')" class="text-sm text-text-dark hover:text-orange transition-colors cursor-pointer">Pricing</button>
        <button @click="scrollTo('hero')" class="text-sm font-medium text-white bg-orange hover:bg-orange/90 px-4 py-2 rounded-full transition-colors cursor-pointer">Get the App</button>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span class="block w-5 h-0.5 bg-navy transition-transform" :class="{ 'rotate-45 translate-y-2': menuOpen }"></span>
        <span class="block w-5 h-0.5 bg-navy transition-opacity" :class="{ 'opacity-0': menuOpen }"></span>
        <span class="block w-5 h-0.5 bg-navy transition-transform" :class="{ '-rotate-45 -translate-y-2': menuOpen }"></span>
      </button>
    </div>

    <div v-if="menuOpen" class="md:hidden bg-warm-white border-t border-card-border px-6 py-4 flex flex-col gap-4">
      <button @click="scrollTo('features')" class="text-left text-sm text-text-dark hover:text-orange cursor-pointer">Features</button>
      <button @click="scrollTo('how-it-works')" class="text-left text-sm text-text-dark hover:text-orange cursor-pointer">How It Works</button>
      <button @click="scrollTo('pricing')" class="text-left text-sm text-text-dark hover:text-orange cursor-pointer">Pricing</button>
      <button @click="scrollTo('hero')" class="text-sm font-medium text-white bg-orange hover:bg-orange/90 px-4 py-2 rounded-full transition-colors text-center cursor-pointer">Get the App</button>
    </div>
  </header>
</template>
