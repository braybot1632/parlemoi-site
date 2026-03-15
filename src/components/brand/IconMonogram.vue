<script setup>
defineProps({
  size: { type: [Number, String], default: 40 }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    :width="size"
    :height="size"
    role="img"
    aria-label="ParleMoi monogram"
  >
    <circle cx="32" cy="32" r="32" fill="#1B2A4A" />
    <text
      x="32" y="34"
      text-anchor="middle"
      dominant-baseline="central"
      font-family="-apple-system, 'SF Pro Rounded', 'Helvetica Neue', sans-serif"
      font-weight="700"
      font-size="24"
      fill="#E8E4DF"
      letter-spacing="-1"
    >
      PM
    </text>
  </svg>
</template>
