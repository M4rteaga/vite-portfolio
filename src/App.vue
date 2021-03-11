<template>
  <Nav />
  <main class="w-full flex flex-col items-center mt-28 px-10">
    <header class="relative text-center">
      <Title />
      <BodyText
        text="Hi, we're software developers and this is our portfolio. feel free to take a
    look, download our CV and contact us."
      />
    </header>
    <div class="w-full flex flex-row justify-around mt-14">
      <ProfilePicture />
      <ProfilePicture />
    </div>
  </main>
</template>

<script setup>
import Nav from "./components/nav/Nav.vue";
import Title from "./components/landing/Title.vue";
import BodyText from "./components/landing/BodyText.vue";
import ProfilePicture from "./components/landing/ProfilePicture.vue";
</script>
