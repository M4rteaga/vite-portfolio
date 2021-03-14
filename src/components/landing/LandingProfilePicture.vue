<template>
  <figure
    class="group flex flex-col justify-center items-center w-28 lg:w-36 p-0"
  >
    <router-link
      :to="`/${route}`"
      class="block p-0.5 rounded-full hover:bg-gradient-to-tr from-primary-medium to-secondary-green-medium"
    >
      <div class="block p-0.5 rounded-full bg-white">
        <img
          class="w-26 h-26 rounded-full object-cover lg:w-32 lg:h-32"
          v-bind:src="'../../assets/' + imgName"
          v-bind:alt="altTag"
        />
      </div>
    </router-link>
    <router-link :to="`/${route}`">
      <figcaption
        class="duration-300 ease-in-out transform text-center font-light mt-4 text-xs group-hover:font-normal lg:text-sm"
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
</script>
