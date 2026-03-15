<script setup>
defineProps({
  width: { type: [Number, String], default: 160 },
  height: { type: [Number, String], default: 40 }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 80"
    :width="width"
    :height="height"
    role="img"
    aria-label="ParleMoi logo"
  >
    <text
      x="0" y="56"
      font-family="Georgia, 'Times New Roman', serif"
      font-weight="700"
      font-size="48"
      fill="#E8E4DF"
      letter-spacing="-1"
    >
      Parle<tspan fill="#E8863A">Moi</tspan>
    </text>
  </svg>
</template>
