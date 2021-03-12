<template>
  <figure class="group flex flex-col justify-center items-center w-28 p-0">
    <router-link :to="`/${route}`" v-bind:class="style">
      <img
        class="w-26 h-26 rounded-full object-cover"
        v-bind:src="'../../assets/' + imgName"
        v-bind:alt="altTag"
      />
    </router-link>
    <router-link :to="`/${route}`">
      <figcaption
        class="text-center font-light mt-4 text-xs group-hover:font-normal"
      >
        {{ caption }}
      </figcaption>
    </router-link>
  </figure>
</template>

<script setup>
import { defineProps, defineComponent } from "vue";

defineProps({
  imgName: String,
  altTag: String,
  caption: String,
  route: String,
});

const transition = "transition duration-500 ease-in-out";

const gradientColor =
  "bg-gradient-to-tr from-primary-medium to-secondary-green-medium";

const style = `${transition} block p-0.5 rounded-full hover:${gradientColor}`;
</script>
