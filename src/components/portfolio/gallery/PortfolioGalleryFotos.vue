<template>
  <figure class="flex justify-center">
    <div class="relative flex">
      <img
        class="rounded-2xl w-68 h-52 object-cover z-40 shadow-lg"
        v-bind:src="'../../assets/' + imgName"
        v-bind:alt="altTag"
      />
      <div
        :class="
          'absolute rounded-3xl w-68 h-52 bg-secondary-pink-solid z-0 -bottom-0 -left-0 transition ease-in duration-400 transform -translate-x-2.5 translate-y-2.5 ' +
          ' ' +
          backColor
        "
      ></div>
    </div>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  imgName: String,
  altTag: String,
  backColor: String,
});
</script>
