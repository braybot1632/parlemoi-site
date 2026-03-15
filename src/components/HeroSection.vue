<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(false)
const submitted = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { visible.value = true })
})

function onSubmit() {
  submitted.value = true
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
        Learn French by<br />
        <span class="text-orange">actually speaking it.</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="mt-6 text-lg md:text-xl text-text-light/60 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Not flashcards. Not multiple choice. You listen to a lesson,
        then say the phrases out loud, play voice games, and practice
        real conversations — all scored on pronunciation.
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
          action="https://formsubmit.co/braybot1632@gmail.com"
          method="POST"
          @submit="onSubmit"
          class="flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="ParleMoi Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://parlemoiapp.com" />
          <input type="text" name="_honey" style="display:none" />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            class="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-cream placeholder-text-muted text-sm focus:outline-none focus:border-orange/50 transition-colors"
          />
          <button
            type="submit"
            class="glow-btn text-white font-medium px-7 py-3.5 rounded-full text-sm whitespace-nowrap cursor-pointer"
          >
            Join the Beta
          </button>
        </form>
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
