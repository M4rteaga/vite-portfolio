<template>
  <figure class="flex justify-center">
    <div class="relative flex">
      <img
        class="duration-300 ease-in-out transform rounded-3xl w-52 h-52 object-cover z-40 shadow-lg md:w-64 md:h-64"
        v-bind:src="'../../assets/' + imgName"
        v-bind:alt="altTag"
      />
      <div
        class="duration-300 ease-in-out transform absolute rounded-3xl w-52 h-50 bg-indigo-600 z-0 top-0 left-0 md:w-64 md:h-64 transition ease-in duration-400 transform -translate-x-3 -translate-y-3"
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

//
</script>

//-top-3 -left-3 //transition ease-in duration-700 transform -translate-x-3
-translate-y-3
