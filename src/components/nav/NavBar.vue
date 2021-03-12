<template>
  <nav class="w-full bg-base-black">
    <div
      class="flex flex-row justify-between mx-4 content-center items-center h-12"
    >
      <h3 class="font-normal text-white text-base">M&A Portfolio</h3>
      <!-- <div class="d-flex flex-row">
                <h3 class="">About me</h3>
                <h3 class="">Gallery</h3>
                <h3 class="">Skill</h3>
                <h3 class="">Contact</h3>
            </div> -->
      <Hamburger />
    </div>
  </nav>
</template>

<script setup>
import Hamburger from "./Hamburger.vue";
</script>
