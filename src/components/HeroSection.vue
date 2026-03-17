<script setup>
import { onMounted, ref } from 'vue'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxakNNzReV-0ka9pyzHN08G3hVay0jVUGaoAiV22zSyw1CuJ-pKW6X3DVTGeYM_pRAHtA/exec'

const visible = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const error = ref('')
const email = ref('')
const lastSubmitTime = ref(0)

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

function sanitizeEmail(input) {
  return input.trim().toLowerCase().slice(0, 254)
}

function isValidEmail(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) && input.length <= 254
}

async function onSubmit() {
  const now = Date.now()
  if (now - lastSubmitTime.value < 5000) {
    error.value = 'Please wait a moment before trying again.'
    return
  }
  lastSubmitTime.value = now

  const cleanEmail = sanitizeEmail(email.value)
  if (!isValidEmail(cleanEmail)) {
    error.value = 'Please enter a valid email address.'
    return
  }

  submitting.value = true
  error.value = ''
  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanEmail }),
    })
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'beta_signup', { location: 'hero' })
    }
    submitted.value = true
  } catch (e) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}
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
      <!-- Headline -->
      <h1
        class="hero-headline font-display font-bold text-text-dark transition-all duration-1000 delay-150"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        ParleMoi,<br />
        <span class="text-orange">Speak and Learn.</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Practice speaking, real learning.
      </p>

      <!-- Beta signup form -->
      <div
        class="mt-10 max-w-md mx-auto transition-all duration-1000 delay-500"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="text-sm font-medium text-orange uppercase tracking-wider mb-4">Sign up to be a beta tester</p>

        <div v-if="submitted" class="glass rounded-2xl p-6">
          <p class="text-text-dark font-medium">You're on the list.</p>
          <p class="text-text-muted text-sm mt-1">We'll email you when the beta is ready.</p>
        </div>

        <form
          v-else
          @submit.prevent="onSubmit"
          class="flex flex-col sm:flex-row gap-3"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="Your email address"
            class="flex-1 px-5 py-3.5 rounded-full bg-white border border-card-border text-text-dark placeholder-text-muted text-sm focus:outline-none focus:border-orange/50 transition-colors"
          />
          <button
            type="submit"
            :disabled="submitting"
            class="glow-btn text-white font-medium px-7 py-3.5 rounded-full text-sm whitespace-nowrap cursor-pointer disabled:opacity-50"
          >
            {{ submitting ? 'Sending...' : 'Join the Beta' }}
          </button>
        </form>
        <p v-if="error" class="mt-3 text-sm text-error">{{ error }}</p>
      </div>

      <!-- Store buttons — Coming Soon -->
      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="inline-flex items-center gap-3 text-text-secondary font-medium px-7 py-3.5 rounded-full text-sm border border-card-border">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.76C19.95 6.84 17.62 8.23 17.65 11.1C17.68 14.54 20.62 15.71 20.66 15.73C20.63 15.82 20.19 17.36 19.11 18.95L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
          App Store
          <span class="text-xs text-orange font-medium uppercase tracking-wider">Coming Soon</span>
        </div>
        <div class="inline-flex items-center gap-3 text-text-secondary font-medium px-7 py-3.5 rounded-full text-sm border border-card-border">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
          Google Play
          <span class="text-xs text-orange font-medium uppercase tracking-wider">Coming Soon</span>
        </div>
      </div>

      <!-- Trust signals -->
      <p
        class="mt-6 text-sm text-text-muted transition-all duration-1000 delay-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Free to start · No credit card<br />
        Built in Montreal, where French is spoken every day.
      </p>

      <!-- Scroll indicator -->
      <div
        class="mt-16 transition-all duration-1000 delay-700"
        :class="visible ? 'opacity-100' : 'opacity-0'"
      >
        <div class="w-6 h-10 border border-card-border rounded-full mx-auto flex items-start justify-center p-1.5">
          <div class="w-1 h-2.5 bg-orange/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>
