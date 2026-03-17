<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['First 2 lessons', '10 conversation messages per day', 'All exercise types', 'Pronunciation feedback', 'No credit card required'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Monthly',
    price: '$5.99',
    period: '/month',
    features: ['Full curriculum (A1-B2)', 'Unlimited conversations', 'All voice games', 'Advanced pronunciation analytics'],
    highlighted: false,
    cta: 'Start Learning',
  },
  {
    name: 'Yearly',
    price: '$39.99',
    period: '/year',
    features: ['Full curriculum (A1-B2)', 'Unlimited conversations', '7-day free trial', 'All voice games', 'Advanced analytics'],
    highlighted: true,
    badge: 'Best Value',
    cta: 'Start Free Trial',
    savings: 'Save 44% vs monthly ($3.33/month)',
  },
  {
    name: 'Lifetime',
    price: '$79.99',
    period: 'one-time',
    subtitle: 'One payment. Yours forever.',
    features: ['Full curriculum (A1-B2)', 'Unlimited conversations', 'All voice games', 'Advanced analytics', 'All future updates'],
    highlighted: false,
    badge: 'Pay Once',
    cta: 'Get Lifetime Access',
  },
]
</script>

<template>
  <section id="pricing" class="section-pad relative">
    <div class="divider-gradient mb-16"></div>

    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="text-sm text-orange font-medium tracking-wider uppercase mb-4">Pricing</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold text-text-dark" style="letter-spacing: -0.02em;">
          Pricing
        </h2>
        <p class="mt-4 text-text-muted max-w-md mx-auto">What you see is what you pay.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative rounded-2xl p-6 md:p-8 flex flex-col reveal transition-all duration-300"
          :class="plan.highlighted
            ? 'glass border-orange/30 lg:scale-105 lg:-my-2'
            : 'glass'"
        >
          <div v-if="plan.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange to-gold text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg shadow-orange/20">
            {{ plan.badge }}
          </div>

          <h3 class="font-display text-lg font-bold text-text-dark">{{ plan.name }}</h3>
          <p v-if="plan.subtitle" class="text-xs text-text-muted mt-1">{{ plan.subtitle }}</p>

          <div class="mt-4 flex items-baseline gap-1">
            <span class="text-3xl md:text-4xl font-bold text-text-dark font-display">{{ plan.price }}</span>
            <span class="text-sm text-text-muted">{{ plan.period }}</span>
          </div>

          <p v-if="plan.savings" class="mt-1 text-xs text-orange">{{ plan.savings }}</p>

          <ul class="mt-6 space-y-3 flex-1">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2.5 text-sm text-text-secondary">
              <svg class="w-4 h-4 text-success mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {{ feature }}
            </li>
          </ul>

          <button
            class="mt-8 w-full py-3 rounded-full text-sm font-medium transition-all cursor-pointer"
            :class="plan.highlighted
              ? 'glow-btn text-white'
              : 'bg-white text-text-dark hover:bg-white border border-card-border'"
          >
            {{ plan.cta }}
          </button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-text-muted">
        All prices in USD. Billed through the App Store or Google Play.
      </p>
    </div>
  </section>
</template>
