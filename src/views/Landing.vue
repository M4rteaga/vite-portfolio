<template>
  <NavBar />
  <div class="flex flex-col justify-center items-center">
    <main
      class="w-full flex flex-col items-center mt-28 px-10 max-w-screen-2xl"
    >
      <div
        class="duration-300 ease-in-out transform sm:w-3/4 md:w-3/5 lg:w-1/2"
      >
        <header class="text-center">
          <div class="relative flex flex-col">
            <Title class="z-50" />
            <CircleBlueToGreen
              class="duration-300 ease-in-out transform w-20 h-20 -top-7 z-20 backdrop-blur lg:w-32 lg:h-32 lg:-top-10 lg:left-10"
            />
            <CirclePinkToBlue
              class="duration-300 ease-in-out transform w-14 h-14 -top-12 -left-5 z-0 lg:w-24 lg:h-24 lg:-top-20 lg:left-1"
            />
          </div>
          <BodyText
            text="Hi, we're software developers and this is our portfolio. Feel free to take a
    look, download our CV and contact us."
          />
        </header>
        <ul class="w-full flex flex-row justify-around mt-14 xl:px-24">
          <li>
            <ProfilePicture
              imgName="mateo.jpg"
              altTag="Profile picture"
              caption="Mateo Arteaga"
              route="mateo"
            />
          </li>
          <li>
            <ProfilePicture
              imgName="andres.jpg"
              altTag="Profile picture"
              caption="Andres Velez"
              route="andres"
            />
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from "../components/nav/NavBar.vue";
import Title from "../components/landing/LandingTitle.vue";
import BodyText from "../components/landing/LandingBodyText.vue";
import ProfilePicture from "../components/landing/LandingProfilePicture.vue";
import CircleBlueToGreen from "../components/CircleBlueToGreen.vue";
import CirclePinkToBlue from "../components/CirclePinkToBlue.vue";
</script>
