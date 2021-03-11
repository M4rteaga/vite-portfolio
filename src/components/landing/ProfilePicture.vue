<template>
  <figure class="flex flex-col justify-center items-center w-28 p-0">
    <div class="">
      <img
        class="w-26 h-26 rounded-full object-cover hover:(bg-clip-border border-3) hover:bg-gradient-to-r hover:from-secondary-pink-solid hover:to-secondary-green-solid"
        v-bind:src="'../../assets/' + imgName"
        v-bind:alt="altTag"
      />
    </div>
    <figcaption class="text-center font-light mt-4 text-xs hover:font-normal">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  imgName: String,
  altTag: String,
  caption: String,
});
</script>

//"#background: linear-gradient(47.58deg, rgba(3, 206, 164, 0.32) 0%, rgba(238, 39, 111, 0.08) 102.1%);"