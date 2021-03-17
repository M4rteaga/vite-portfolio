<template>
  <h1
    class="duration-300 ease-in-out transform font-bold text-base-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
  >
    {{ text }}
  </h1>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>
