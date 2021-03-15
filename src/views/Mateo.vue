<template>
  <NavBar />
  <main class="flex flex-col justify-center items-center">
    <div class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl">
      <div class="flex flex-col">
        <PortfolioFotos imgName="mateo.jpg" altTag="Profile picture" />
        <div class="mt-10">
          <PortfolioTitle text="Mateo Arteaga" />
          <PortfolioBodytext
            text="welcome, I am a software engineer from Colombia 🇨🇴. 
            I am passionate about learning new technologies, listening to music, watching movies, hanging out and pets."
          />
        </div>
        <PortfolioButton class="self-center" content="Resume" />
      </div>
    </div>
    <div class="relative w-full flex bg-base-grey mt-16 justify-center">
      <div
        class="absolute flex w-46 h-46 z-20 overflow-hidden transform rotate-180 right-0"
      >
        <CircleGreenToPink
          class="w-46 h-46 backdrop-blur transform translate-y-23 -translate-x-12"
        />
      </div>
      <div class="absolute flex w-18 h-18 overflow-hidden bottom-0 left-0">
        <CircleBlueToGreen
          class="w-18 h-18 backdrop-blur transform -translate-x-1/2 translate-y-1/2"
        />
      </div>
      <!-- -bottom-9 -left-9 -->
      <div class="my-8 flex flex-col items-center justify-center">
        <PortfolioMainText text="Gallery" />
        <div>
          <PortfolioGalleryFotos imgName="Poco.jpg" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import NavBar from "../components/nav/NavBar.vue";
import CircleBlueToGreen from "../components/CircleBlueToGreen.vue";
import CircleGreenToPink from "../components/CircleGreenToPink.vue";
import {
  PortfolioBodytext,
  PortfolioFotos,
  PortfolioMainText,
  PortfolioButton,
  PortfolioGalleryFotos,
  PortfolioTitle,
} from "../components/portfolio/Portfolio.js";
</script>
