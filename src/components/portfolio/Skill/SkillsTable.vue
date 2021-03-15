<template>
  <div
    class="flex flex-col bg-gradient-to-tr from-glass-whiteBl to-glass-whiteTr backdrop-blur-20 px-10 rounded-2xl w-full pb-10"
  >
    <div class="flex flex-col">
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          <h1 class="text-white mb-3 mt-4">{{ skill.name }}</h1>
          <div>
            <div class="w-full h-2 bg-base-grey rounded-full">
              <div
                :class="
                  'bg-secondary-green-solid h-2 rounded-full' +
                  ' ' +
                  skill.level
                "
              ></div>
            </div>
            <div
              class="pt-1.5 text-white text-xs flex felx-row justify-between font-light"
            >
              <span>Basic</span>
              <span>Intermediate</span>
              <span>Advance</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  skills: Array,
});
</script>
