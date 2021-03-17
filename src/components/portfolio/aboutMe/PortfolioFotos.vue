<template>
  <figure class="flex justify-center">
    <div class="relative flex">
      <img
        class="rounded-3xl w-52 h-52 object-cover z-40 shadow-lg md:w-64 md:h-64"
        v-bind:src="'../../assets/' + imgName"
        v-bind:alt="altTag"
      />
      <div
        class="absolute rounded-3xl w-52 h-50 bg-indigo-600 z-0 -top-3 -left-3 md:w-64 md:h-60"
      ></div>
    </div>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  imgName: String,
  altTag: String,
});
</script>
