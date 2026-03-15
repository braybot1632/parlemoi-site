<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-darkest font-body text-text-light">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
