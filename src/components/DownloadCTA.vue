<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxakNNzReV-0ka9pyzHN08G3hVay0jVUGaoAiV22zSyw1CuJ-pKW6X3DVTGeYM_pRAHtA/exec'

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')
const email = ref('')

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
      window.gtag('event', 'beta_signup', { location: 'bottom_cta' })
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
  <section id="download" class="section-pad relative overflow-hidden">
    <!-- Background orb -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange/5 blur-[150px] pointer-events-none"></div>

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="reveal">
        <h2 class="font-display text-3xl md:text-5xl font-bold text-cream" style="letter-spacing: -0.02em; line-height: 1.1;">
          Be the first to try it.
        </h2>
        <p class="mt-5 text-lg text-text-light/50 max-w-md mx-auto">
          Sign up for the beta. We'll let you know the moment it's ready.
        </p>
      </div>

      <div class="mt-10 max-w-md mx-auto reveal">
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
    </div>
  </section>
</template>
