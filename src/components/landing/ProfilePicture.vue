<template>
  <figure class="flex flex-col justify-center items-center w-28 p-0">
    <img
      style="
        border-radius: 50%;
        object-fit: cover;
        width: 6.25rem;
        height: 6.25rem;
      "
      v-bind:src="'../../assets/' + imgName"
      v-bind:alt="altTag"
    />
    <figcaption class="text-center font-light mt-4 text-xs">
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