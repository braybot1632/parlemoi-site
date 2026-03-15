<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'
useReveal()

const submitted = ref(false)

function onSubmit() {
  submitted.value = true
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
    </div>
  </section>
</template>
