<template>
  <div class="w-full flex flex-col rounded-2xl px-4 shadow-lg">
    <PortfolioMainText text="Reach out ✍️ !!" class="mt-6 mb-0" />
    <form action="" class="w-full mb-8 flex flex-col">
      <ul>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="name" class="text-black px-2">Name</label>
          </div>
          <div class="w-full">
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="text"
              required
              class="border w-full rounded-lg px-3 py-1"
            />
          </div>
        </li>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="email" class="text-black px-2">Email address</label>
          </div>
          <div class="w-full">
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
              class="border w-full rounded-lg px-3 py-1"
            />
          </div>
        </li>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="message" class="text-black px-2">Message</label>
          </div>
          <div class="w-full">
            <input
              type="text"
              id="message"
              name="message"
              autocomplete="text"
              required
              class="border w-full rounded-lg px-3 py-1 h-30"
            />
          </div>
        </li>
      </ul>
      <PortfolioButton
        class="self-center bg-secondary-pink-solid w-34"
        content="Send"
      />
    </form>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

import PortfolioButton from "../PortfolioButton.vue";
import PortfolioMainText from "../PortfolioMainText.vue";

defineComponent({});

const fields = [
  {
    inputType: "text",
    labelName: "Name",
  },
  {
    inputType: "email",
    labelName: "Email address",
  },
  {
    inputType: "text",
    labelName: "Message",
  },
];
</script>
