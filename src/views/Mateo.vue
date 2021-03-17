<template>
  <div class="relative h-full">
    <SideMenu />
    <main class="flex flex-col justify-center items-center z-0">
      <!-- About me -->
      <div
        id="aboutMe"
        class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl"
      >
        <div class="flex flex-col">
          <div
            class="flex flex-col md:flex-row-reverse md:justify-between lg:justify-around"
          >
            <PortfolioFotos imgName="mateo.jpg" altTag="Profile picture" />
            <div class="mt-10 md:w-1/2">
              <PortfolioTitle text="Mateo Arteaga" />
              <PortfolioBodytext
                class="md:mt-6"
                text="Welcome, I am a software engineer from Colombia 🇨🇴. 
            I am passionate about learning new technologies, listening to music, watching movies, hanging out and pets."
              />
            </div>
          </div>
          <div class="flex flex-row w-full justify-center">
            <PortfolioButton
              class="self-center bg-secondary-green-solid transition ease-in-out duration-300 hover:bg-secondary-green-dark"
              content="Resume"
            />
          </div>
        </div>
      </div>
      <!-- Gallery -->
      <div
        id="gallery"
        class="relative w-full flex bg-base-grey mt-16 justify-center"
      >
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
        id="skill"
        class="relative w-full flex flex-col bg-indigo-600 justify-center items-cente px-10"
      >
        <!-- Skills set -->
        <div class="flex flex-col justify-center my-8 items-center px-0">
          <PortfolioMainText text="Skills" class="text-base-white" />
          <div
            class="w-full flex flex-wrap space-y-8 justify-around items-start"
          >
            <div class="w-96">
              <SkillsType skillType="Languages" />
              <SkillsTable :skills="languages" />
            </div>
            <div class="w-96">
              <SkillsType skillType="Frameworks" />
              <SkillsTable :skills="frameworks" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10 lg:mt-15"
      >
        <!-- Contact form -->
        <div class="relative flex flex-col w-full sm:w-96">
          <ContactForm class="transform mt-10" />
          <CircleBlueToGreen
            class="duration-300 ease-in-out transform w-20 h-20 top-2 -left-5 z-10 backdrop-blur lg:w-32 lg:h-32 lg:-top-2 lg:-left-10"
          />
          <CirclePinkToBlue
            class="duration-300 ease-in-out transform w-14 h-14 -top-5 -left-9 z-0 lg:w-24 lg:h-24 lg:-top-10 lg:-left-20"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import CircleBlueToGreen from "../components/CircleBlueToGreen.vue";
import CircleGreenToPink from "../components/CircleGreenToPink.vue";
import CirclePinkToBlue from "../components/CirclePinkToBlue.vue";
import SideMenu from "../components/nav/SideMenu.vue";

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
