<template>
  <p
    class="duration-300 ease-in-out transform font-normal mt-4 text-sm px-1.5 md:text-lg lg:text-xl"
  >
    {{ text }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>
