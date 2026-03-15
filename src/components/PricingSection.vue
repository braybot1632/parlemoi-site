<script setup>
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    features: ['First 2 lessons', '10 AI messages per day', 'All exercise types'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Monthly',
    price: '$5.99',
    period: '/mo',
    features: ['Full curriculum (A1-B2)', 'Unlimited AI conversations', 'All mini-games', 'Advanced pronunciation analytics'],
    highlighted: false,
    cta: 'Start Learning',
  },
  {
    name: 'Yearly',
    price: '$39.99',
    period: '/yr',
    features: ['Everything in Monthly', '7-day free trial', 'Best value — save 44%'],
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
  },
]
</script>

<template>
  <section id="pricing" class="bg-warm-white py-20 md:py-28">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy">Simple, transparent pricing</h2>
        <p class="mt-4 text-text-muted">No hidden charges. Ever.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative bg-warm-white border rounded-2xl p-6 flex flex-col transition-shadow duration-300"
          :class="plan.highlighted ? 'border-orange shadow-[0_8px_20px_rgba(232,134,58,0.12)]' : 'border-card-border hover:shadow-[0_8px_20px_rgba(27,42,74,0.06)]'"
        >
          <div v-if="plan.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-medium px-3 py-1 rounded-full">
            {{ plan.badge }}
          </div>

          <h3 class="font-display text-lg font-bold text-navy">{{ plan.name }}</h3>
          <div class="mt-3 flex items-baseline gap-1">
            <span class="text-3xl font-bold text-navy">{{ plan.price }}</span>
            <span v-if="plan.period" class="text-sm text-text-muted">{{ plan.period }}</span>
          </div>

          <ul class="mt-6 space-y-3 flex-1">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2 text-sm text-text-dark">
              <svg class="w-4 h-4 text-success mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button
            class="mt-6 w-full py-3 rounded-full text-sm font-medium transition-colors cursor-pointer"
            :class="plan.highlighted ? 'bg-orange text-white hover:bg-[#d6762e]' : 'bg-navy/5 text-navy hover:bg-navy/10'"
          >
            {{ plan.cta }}
          </button>
        </div>
      </div>

      <p class="mt-8 text-center text-sm text-text-muted">
        Lifetime access also available for $79.99 one-time. All prices in USD. Billed through Apple App Store or Google Play.
      </p>
    </div>
  </section>
</template>
