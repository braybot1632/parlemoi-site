<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const links = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
  { to: '/eula', label: 'EULA' },
]

const isActive = (path) => computed(() => route.path === path)
</script>

<template>
  <nav class="flex gap-5 text-sm border-b border-white/5 pb-6 mb-10" aria-label="Legal pages">
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="transition-colors"
      :class="isActive(link.to).value
        ? 'text-orange font-semibold'
        : 'text-text-muted hover:text-text-light'"
    >
      {{ link.label }}
    </router-link>
  </nav>
</template>
