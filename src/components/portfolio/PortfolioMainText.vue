<template>
  <h1
    class="duration-300 ease-in-out transform font-bold mb-6 text-xl text-base-black md:text-2xl lg:text-3xl xl:text-4xl"
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
