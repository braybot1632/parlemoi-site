<script setup>
</script>

<template>
  <footer class="border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <a href="/" class="text-xl font-display tracking-tight">
            <span class="text-cream font-bold">Parle</span><span class="text-orange font-bold">Moi</span>
          </a>
          <p class="mt-2 text-sm text-text-muted">Learn French by speaking it.</p>
        </div>

        <nav class="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <a href="/privacy.html" class="text-text-muted hover:text-text-light transition-colors">Privacy</a>
          <a href="/terms.html" class="text-text-muted hover:text-text-light transition-colors">Terms</a>
          <a href="/eula.html" class="text-text-muted hover:text-text-light transition-colors">EULA</a>
          <a href="mailto:support@parlemoi.app" class="text-text-muted hover:text-text-light transition-colors">Contact</a>
        </nav>
      </div>

      <div class="mt-8 pt-6 border-t border-white/5 text-sm text-text-muted">
        2026 ParleMoi. Built in Montreal.
      </div>
    </div>
  </footer>
</template>
