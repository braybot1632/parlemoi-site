<script setup>
import LogoFull from './brand/LogoFull.vue'
</script>

<template>
  <footer class="border-t border-card-border">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <router-link to="/" class="inline-block">
            <LogoFull :width="120" :height="30" />
          </router-link>
          <p class="mt-2 text-sm text-text-muted">Learn French by speaking it.</p>
          <p class="mt-1 text-sm text-text-muted">Built in Montreal.</p>
        </div>

        <nav class="flex flex-col md:flex-row gap-4 md:gap-8 text-sm" aria-label="Legal">
          <router-link to="/privacy" class="text-text-muted hover:text-navy transition-colors">Privacy</router-link>
          <router-link to="/terms" class="text-text-muted hover:text-navy transition-colors">Terms</router-link>
          <router-link to="/eula" class="text-text-muted hover:text-navy transition-colors">EULA</router-link>
          <a href="mailto:support@parlemoiapp.com" class="text-text-muted hover:text-navy transition-colors">Contact</a>
        </nav>
      </div>

      <div class="mt-8 pt-6 border-t border-card-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-text-muted">
        <p>Questions? Feedback? <a href="mailto:support@parlemoiapp.com" class="text-text-secondary hover:text-navy transition-colors">support@parlemoiapp.com</a> — We read every email.</p>
        <p>&copy; 2026 ParleMoi</p>
      </div>
    </div>
  </footer>
</template>
