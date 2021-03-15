<template>
  <NavBar />
  <main class="flex flex-col justify-center items-center">
    <!-- About me -->
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
        <PortfolioButton
          class="self-center bg-secondary-green-solid"
          content="Resume"
        />
      </div>
    </div>
    <!-- Gallery -->
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
      <div class="my-8 flex flex-col items-center justify-center w-full">
        <PortfolioMainText text="Gallery" />
        <div class="mt-4 mb-8">
          <PortfolioGalleryFotos imgName="Poco.jpg" />
        </div>
      </div>
    </div>
    <div
      class="relative w-full flex flex-col bg-indigo-600 justify-center items-cente px-10"
    >
      <!-- Skills set -->
      <div class="flex flex-col justify-center my-8 items-center">
        <PortfolioMainText text="Skills" class="text-white" />
        <div class="w-full flex flex-wrap space-y-8">
          <div class="w-full">
            <SkillsType skillType="Languages" />
            <SkillsTable :skills="languages" />
          </div>
          <div class="w-full">
            <SkillsType skillType="Frameworks" />
            <SkillsTable :skills="frameworks" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10"
    >
      <!-- Contact form -->
      <ContactForm />
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
  SkillsTable,
  SkillsType,
  ContactForm,
} from "../components/portfolio/Portfolio.js";

const languages = [
  {
    name: "HTML",
    level: "w-3/4",
  },
  {
    name: "CSS",
    level: "w-1/2",
  },
  {
    name: "JavaScript",
    level: "w-2/3",
  },
  {
    name: "Typescript",
    level: "w-1/5",
  },
  {
    name: "Go",
    level: "w-1/5",
  },
];

const frameworks = [
  {
    name: "Tailwindcss",
    level: "w-3/4",
  },
  {
    name: "Vue",
    level: "w-2/5",
  },
  {
    name: "React",
    level: "w-1/6",
  },
  {
    name: "Express",
    level: "w-2/4",
  },
];
</script>
