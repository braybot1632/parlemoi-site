<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LogoFull from './brand/LogoFull.vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-card-border' : ''"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center">
        <LogoFull :width="120" :height="30" />
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <button @click="scrollTo('voice-games')" class="text-sm text-text-secondary hover:text-navy transition-colors cursor-pointer">Games</button>
        <button @click="scrollTo('audiobook-lessons')" class="text-sm text-text-secondary hover:text-navy transition-colors cursor-pointer">Lessons</button>
        <button @click="scrollTo('scenarios')" class="text-sm text-text-secondary hover:text-navy transition-colors cursor-pointer">Scenarios</button>
        <button @click="scrollTo('features')" class="text-sm text-text-secondary hover:text-navy transition-colors cursor-pointer">Features</button>
        <button @click="scrollTo('hero')" class="glow-btn text-sm font-medium text-white px-5 py-2 rounded-full cursor-pointer">Join the Beta</button>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span class="block w-5 h-0.5 bg-text-dark transition-all duration-300" :class="{ 'rotate-45 translate-y-2': menuOpen }"></span>
        <span class="block w-5 h-0.5 bg-text-dark transition-all duration-300" :class="{ 'opacity-0': menuOpen }"></span>
        <span class="block w-5 h-0.5 bg-text-dark transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': menuOpen }"></span>
      </button>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t border-card-border px-6 py-6 flex flex-col gap-5">
        <button @click="scrollTo('voice-games')" class="text-left text-sm text-text-secondary hover:text-navy cursor-pointer py-2">Games</button>
        <button @click="scrollTo('audiobook-lessons')" class="text-left text-sm text-text-secondary hover:text-navy cursor-pointer py-2">Lessons</button>
        <button @click="scrollTo('scenarios')" class="text-left text-sm text-text-secondary hover:text-navy cursor-pointer py-2">Scenarios</button>
        <button @click="scrollTo('features')" class="text-left text-sm text-text-secondary hover:text-navy cursor-pointer py-2">Features</button>
        <button @click="scrollTo('hero')" class="text-left text-sm text-text-secondary hover:text-navy cursor-pointer py-2">Join the Beta</button>
      </div>
    </Transition>
  </header>
</template>
