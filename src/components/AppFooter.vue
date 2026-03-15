<script setup>
import LogoFullLight from './brand/LogoFullLight.vue'
</script>

<template>
  <footer class="border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <router-link to="/" class="inline-block">
            <LogoFullLight :width="120" :height="30" />
          </router-link>
          <p class="mt-2 text-sm text-text-muted">Speak to me, begin learning.</p>
        </div>

        <nav class="flex flex-col md:flex-row gap-4 md:gap-8 text-sm" aria-label="Legal">
          <router-link to="/privacy" class="text-text-muted hover:text-text-light transition-colors">Privacy</router-link>
          <router-link to="/terms" class="text-text-muted hover:text-text-light transition-colors">Terms</router-link>
          <router-link to="/eula" class="text-text-muted hover:text-text-light transition-colors">EULA</router-link>
          <a href="mailto:support@parlemoi.app" class="text-text-muted hover:text-text-light transition-colors">Contact</a>
        </nav>
      </div>

      <div class="mt-8 pt-6 border-t border-white/5 text-sm text-text-muted">
        &copy; 2026 ParleMoi. Built in Montreal.
      </div>
    </div>
  </footer>
</template>
