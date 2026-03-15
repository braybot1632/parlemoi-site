<script setup>
const features = [
  {
    title: 'Speak from Day One',
    description: 'Every exercise has you speaking French out loud. No multiple choice busy-work.',
    icon: 'mic',
  },
  {
    title: 'AI Conversation Partners',
    description: 'Practice with Henri and Marie, AI tutors who respond naturally and correct gently.',
    icon: 'users',
  },
  {
    title: 'Pronunciation Scoring',
    description: 'Real-time feedback on your accent with accuracy percentages.',
    icon: 'waveform',
  },
  {
    title: 'Structured Curriculum',
    description: 'A1 to B2 progression through real-life scenarios: ordering coffee, giving directions, small talk.',
    icon: 'book',
  },
  {
    title: 'Designed for Adults',
    description: 'Clean interface, respectful notifications, no manipulation. Your time is valued.',
    icon: 'shield',
  },
  {
    title: 'Works Offline',
    description: 'Lessons and exercises available without internet. AI conversations require connection.',
    icon: 'wifi-off',
  },
]
</script>

<template>
  <section id="features" class="bg-cream py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-navy">Everything you need to speak French</h2>
        <p class="mt-4 text-text-muted max-w-xl mx-auto">Six tools, one goal — getting you speaking confidently.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="bg-warm-white border border-card-border rounded-2xl p-6 hover:shadow-[0_8px_20px_rgba(27,42,74,0.06)] transition-shadow duration-300"
        >
          <!-- Icon -->
          <div class="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
            <!-- Mic -->
            <svg v-if="feature.icon === 'mic'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
            </svg>
            <!-- Users -->
            <svg v-if="feature.icon === 'users'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <!-- Waveform -->
            <svg v-if="feature.icon === 'waveform'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>
            </svg>
            <!-- Book -->
            <svg v-if="feature.icon === 'book'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            <!-- Shield -->
            <svg v-if="feature.icon === 'shield'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
            </svg>
            <!-- Wifi Off -->
            <svg v-if="feature.icon === 'wifi-off'" class="w-5 h-5 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>
            </svg>
          </div>

          <h3 class="font-display text-lg font-bold text-navy">{{ feature.title }}</h3>
          <p class="mt-2 text-sm text-text-muted leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
