<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'App simulator preview',
  },
})
</script>

<template>
  <div class="phone-shell reveal">
    <iframe
      :src="props.src"
      :title="props.title"
      loading="lazy"
      class="phone-viewport"
      allow="autoplay"
    />
  </div>
</template>

<style scoped>
.phone-shell {
  position: relative;
  /* Google Pixel 6 CSS viewport: 393 x 851 */
  width: min(100%, 300px);
  aspect-ratio: 393 / 851;
  overflow: hidden;
  border-radius: 1.6rem;
  background: transparent;
  box-shadow: 0 12px 28px rgba(15, 27, 51, 0.14);
}

.phone-viewport {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  background: #fff;
}
</style>
