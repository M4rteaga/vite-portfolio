<template>
  <div
    class="relative w-full flex flex-col rounded-2xl px-4 shadow-lg z-50 bg-base-white"
  >
    <PortfolioMainText text="Reach out ✍️ !!" class="mt-6 mb-0" />
    <form action="" class="w-full mb-8 flex flex-col">
      <ul>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="name" class="block text-sm text-base-black px-2"
              >Name</label
            >
          </div>
          <div class="w-full">
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="text"
              required
              class="text-sm text-base-black w-full rounded-lg border border-gray-500 px-3 py-1 shadow-sm focus:outline-none focus:border-primary-solid focus:ring-1 focus:ring-primary-solid"
            />
          </div>
        </li>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="email" class="block text-sm text-base-black px-2"
              >Email address</label
            >
          </div>
          <div class="w-full">
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              required
              class="text-sm text-base-black w-full rounded-lg border border-gray-500 px-3 py-1 shadow-sm focus:outline-none focus:border-primary-solid focus:ring-1 focus:ring-primary-solid"
            />
          </div>
        </li>
        <li class="mt-4">
          <div class="w-full mb-2">
            <label for="message" class="block text-sm text-base-black px-2"
              >Message</label
            >
          </div>
          <div class="w-full">
            <textarea
              type="text"
              id="message"
              name="message"
              autocomplete="text"
              required
              class="text-sm text-base-black w-full h-36 rounded-lg border border-gray-500 px-3 py-1 shadow-sm focus:outline-none focus:border-primary-solid focus:ring-1 focus:ring-primary-solid"
            />
          </div>
        </li>
      </ul>
      <PortfolioButton
        class="self-center bg-secondary-pink-solid w-34"
        content="Send"
        arrowDirection="transform -rotate-90"
      />
    </form>
  </div>
</template>

<script setup>
import PortfolioButton from "../PortfolioButton.vue";
import PortfolioMainText from "../PortfolioMainText.vue";
</script>
