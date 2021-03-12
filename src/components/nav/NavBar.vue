<template>
  <nav class="w-full bg-base-black">
    <div
      class="duration-300 ease-in-out transform flex flex-row justify-between mx-4 content-center items-center h-12 sm:mx-8 lg:mx-12"
    >
      <h3 class="font-normal text-white text-base">M&A Portfolio</h3>
      <div class="flex flex-row text-white justify-around font-light">
        <h3 class="px-4">About me</h3>
        <h3 class="px-4">Gallery</h3>
        <h3 class="px-4">Skill</h3>
        <h3 class="px-4">Contact</h3>
      </div>
      <!-- {{ Hamburger }} -->
    </div>
  </nav>
</template>

<script setup>
import Hamburger from "./Hamburger.vue";
import { defineProps } from "vue";

// defineProps({
//   Hamburger: object,
// });
</script>
