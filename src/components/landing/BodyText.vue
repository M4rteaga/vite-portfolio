<template>
  <p class="font-normal text-center text-base mt-8 px-1.5">
    {{ text }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
});
</script>