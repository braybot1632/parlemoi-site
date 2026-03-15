<script setup>
import { onMounted, ref } from 'vue'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxakNNzReV-0ka9pyzHN08G3hVay0jVUGaoAiV22zSyw1CuJ-pKW6X3DVTGeYM_pRAHtA/exec'

const visible = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const error = ref('')
const email = ref('')

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

async function onSubmit() {
  submitting.value = true
  error.value = ''
  try {
    await fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
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
        class="hero-headline font-display font-bold text-cream transition-all duration-1000 delay-150"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        ParleMoi,<br />
        <span class="text-orange">speak and learn.</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="mt-6 text-lg md:text-xl text-text-light/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300"
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
          <p class="text-cream font-medium">You're on the list.</p>
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
            class="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-cream placeholder-text-muted text-sm focus:outline-none focus:border-orange/50 transition-colors"
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

      <!-- Trust signals -->
      <p
        class="mt-8 text-sm text-text-muted transition-all duration-1000 delay-600"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Coming soon to iOS and Android · Free to start · No credit card<br />
        Built in Montreal, where French is spoken every day.
      </p>

      <!-- Scroll indicator -->
      <div
        class="mt-16 transition-all duration-1000 delay-700"
        :class="visible ? 'opacity-100' : 'opacity-0'"
      >
        <div class="w-6 h-10 border border-white/20 rounded-full mx-auto flex items-start justify-center p-1.5">
          <div class="w-1 h-2.5 bg-orange/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>
