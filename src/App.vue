<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-warm-white font-body text-text-dark">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
