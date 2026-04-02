<script setup>
import { onMounted, ref } from 'vue'

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
    const res = await fetch('/api/beta-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: cleanEmail }),
    })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || 'Request failed')
    }
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
        class="hero-headline font-display font-bold transition-all duration-1000 delay-150"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <span class="text-navy">Parle</span><span class="text-orange">Moi</span><br />
        <span class="text-navy">Speak and Learn.</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        The app that gets you speaking French.
      </p>

      <!-- Beta signup form -->
      <div
        class="mt-12 md:mt-16 max-w-md mx-auto transition-all duration-1000 delay-400"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div v-if="submitted" class="glass rounded-2xl p-6">
          <p class="text-navy font-medium">You're on the list.</p>
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
            placeholder="Email for beta access"
            class="flex-1 px-5 py-3.5 rounded-full bg-white border border-card-border text-navy placeholder-text-muted text-sm focus:outline-none focus:border-orange/50 transition-colors"
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

      <!-- Secondary: platforms + social (same band, low emphasis) -->
      <div
        class="mt-14 md:mt-20 max-w-xl mx-auto pt-8 md:pt-10 border-t border-card-border/50 transition-all duration-1000 delay-500"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted">
          <div class="inline-flex items-center gap-2 rounded-full border border-card-border/70 bg-white/60 px-3.5 py-2">
            <svg class="w-4 h-4 shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.7 12.57 5.7C13.36 5.7 14.85 4.63 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.76C19.95 6.84 17.62 8.23 17.65 11.1C17.68 14.54 20.62 15.71 20.66 15.73C20.63 15.82 20.19 17.36 19.11 18.95L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
            <span class="font-medium text-text-secondary">App Store</span>
            <span class="text-text-muted">soon</span>
          </div>
          <div class="inline-flex items-center gap-2 rounded-full border border-card-border/70 bg-white/60 px-3.5 py-2">
            <svg class="w-4 h-4 shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
            <span class="font-medium text-text-secondary">Google Play</span>
            <span class="text-text-muted">soon</span>
          </div>
        </div>
        <p
          class="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-text-muted font-normal"
        >
          <a
            href="https://www.instagram.com/parlemoi.app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-text-muted hover:text-navy transition-colors"
          >
            <svg class="w-3.5 h-3.5 shrink-0 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            @parlemoi.app
          </a>
        </p>
      </div>

    </div>
  </section>
</template>
