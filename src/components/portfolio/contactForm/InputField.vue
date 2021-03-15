<template>
  <div class="w-full">
    <div>
      <label :for="field.labelName" class="text-black">{{
        field.labelName
      }}</label>
    </div>
    <div>
      <input
        :type="field.inputType"
        :id="fild.labelName"
        :name="fild.labelName"
        :autocomplete="fild.inputType"
        required
        class=""
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  field: Object,
});
</script>
