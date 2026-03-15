<script setup>
defineProps({
  size: { type: [Number, String], default: 40 }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    :width="size"
    :height="size"
    role="img"
    aria-label="Henri avatar"
  >
    <circle cx="60" cy="60" r="60" fill="#1B2A4A" />
    <circle cx="60" cy="60" r="56" fill="none" stroke="#243654" stroke-width="1" />
    <text
      x="60" y="64"
      text-anchor="middle"
      dominant-baseline="central"
      font-family="Georgia, 'Times New Roman', serif"
      font-weight="700"
      font-size="48"
      fill="#E8E4DF"
    >
      H
    </text>
    <circle cx="96" cy="96" r="12" fill="#E8863A" />
    <circle cx="96" cy="96" r="10" fill="#E8863A" stroke="#1B2A4A" stroke-width="3" />
  </svg>
</template>
