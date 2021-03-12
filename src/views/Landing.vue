<template>
  <NavBar />
  <main class="w-full flex flex-col items-center mt-28 px-10">
    <div class="sm:w-1/2">
      <header class="text-center">
        <div class="relative">
          <Title class="" />
          <CircleBlueToGreen class="w-20 h-20 -top-7" />
          <CirclePinkToBlue class="w-14 h-14 -top-12 -left-5" />
        </div>
        <BodyText
          text="Hi, we're software developers and this is our portfolio. Feel free to take a
    look, download our CV and contact us."
        />
      </header>
      <div class="w-full flex flex-row justify-around mt-14">
        <ProfilePicture
          imgName="mateo.jpg"
          altTag="Profile picture"
          caption="Mateo Arteaga"
        />
        <ProfilePicture
          imgName="andres.jpg"
          altTag="Profile picture"
          caption="Andres Velez"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import NavBar from "../components/nav/NavBar.vue";
import Title from "../components/landing/Title.vue";
import BodyText from "../components/landing/BodyText.vue";
import ProfilePicture from "../components/landing/ProfilePicture.vue";
import CircleBlueToGreen from "../components/CircleBlueToGreen.vue";
import CirclePinkToBlue from "../components/CirclePinkToBlue.vue";
</script>
