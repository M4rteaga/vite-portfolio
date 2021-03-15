<template>
  <h1 class="text-white font-bold mb-4 ml-4 text-md">{{ skillType }}:</h1>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  skillType: String,
});
</script>
