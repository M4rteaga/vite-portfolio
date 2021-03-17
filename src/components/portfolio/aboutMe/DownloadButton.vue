<template>
  <a
    href="../../../public/assets/C.V MateoArteaga.pdf"
    download
    class="mt-8 group text-white rounded-full text-center justify-center text-sm focus:border-none hover:border-none focus:outline-none hover:outline-none border-none"
  >
    <button class="px-6 py-2 flex flex-row">
      {{ content }}

      <svg
        :class="
          'group-hover:motion-safe:animate-pulse w-5 h-5 ml-3 self-center' +
          ' ' +
          arrowDirection
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </button>
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  content: String,
  arrowDirection: String,
});
</script>
