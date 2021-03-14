<template>
  <NavBar />
  <main class="flex flex-col justify-center items-center">
    <div class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl">
      <div class="flex flex-col">
        <PortfolioFotos imgName="mateo.jpg" altTag="Profile picture" />
        <div class="mt-10">
          <PortfolioMainText text="Mateo Arteaga" />
          <PortfolioBodytext
            text="welcome, I am a software engineer from Colombia 🇨🇴. 
            I am passionate about learning new technologies, listening to music, watching movies, hanging out and pets."
          />
        </div>
        <PortfolioButton class="self-center" />
      </div>
    </div>
    <div class="relative w-full flex flex-row bg-base-grey mt-16">HOLA</div>
  </main>
</template>

<script setup>
import NavBar from "../components/nav/NavBar.vue";
import {
  PortfolioMainText,
  PortfolioBodytext,
  PortfolioFotos,
  PortfolioButton,
} from "../components/portfolio/Portfolio.js";
</script>
