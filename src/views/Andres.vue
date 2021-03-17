<template>
  <SideMenu id="navBar" />
  <main class="flex flex-col justify-center items-center">
    <div class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl">
      <div class="flex flex-col">
        <PortfolioFotos imgName="andres.jpg" altTag="Profile picture" />
        <div class="w-full flex flex-col items-center mb-20 mt-10">
          <div><PortfolioTitle text="Andrés Vélez Zapata" /></div>
          <div>
            <PortfolioBodytext
              text="Hi, I am a Software Engineer from Colombia who is passionate about Programing, AI, Design, Data Science and much more."
            />
          </div>
        </div>
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
      <div class="my-8 flex flex-col items-center justify-center">
        <PortfolioMainText text="Gallery" />
        <div>
          <PortfolioGalleryFotos imgName="Poco.jpg" />
        </div>
      </div>
    </div>

    <div
      class="relative w-full flex flex-col bg-indigo-600 justify-center items-cente px-10"
    >
      <!-- Skills set -->
      <div class="flex flex-col justify-center my-8 items-center">
        <PortfolioMainText text="Skills" class="textbase-white" />
        <div class="w-full flex flex-wrap space-y-8">
          <div class="w-full">
            <SkillsType skillType="Languages" />
            <SkillsTable :skills="languages" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10"
    >
      <PortfolioMainText text="Interests" class="text-black" />
      <div class="w-full flex flex-wrap justify-around items-start">
        <div
          class="flex flex-col items-center w-50 h-70 space-y-10 rounded-2xl shadow-lg"
        >
          <div class="lg:text-xl mt-5"><h2>Game Development</h2></div>
          <div class="w-25 h-25">
            <img src="../assets/joystick.svg" alt="" />
          </div>
        </div>

        <div
          class="flex flex-col items-center w-50 h-70 space-y-10 rounded-2xl shadow-lg"
        >
          <div class="lg:text-xl mt-5"><h2>Artificial Intelligence</h2></div>
          <div class="w-25 h-25">
            <img src="../assets/brain.svg" alt="" />
          </div>
        </div>

        <div
          class="flex flex-col items-center w-50 h-70 space-y-10 rounded-2xl shadow-lg"
        >
          <div class="lg:text-xl mt-5"><h2>Data Science</h2></div>
          <div class="w-25 h-25">
            <img src="../assets/hosting-server.svg" alt="" />
          </div>
        </div>

        <div
          class="flex flex-col items-center w-50 h-70 space-y-10 rounded-2xl shadow-lg"
        >
          <div class="lg:text-xl mt-5"><h2>UI and UX</h2></div>
          <div class="w-25 h-25">
            <img src="../assets/selected.svg" alt="" />
          </div>
        </div>

        <div
          class="flex flex-col items-center w-50 h-70 space-y-10 rounded-2xl shadow-lg"
        >
          <div class="lg:text-xl mt-5"><h2>Project Managment</h2></div>
          <div class="w-25 h-25">
            <img src="../assets/rocket-launch.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10"
    >
      <ContactForm />
    </div>
  </main>
</template>

<script setup>
import NavBar from "../components/nav/NavBar.vue";

import ContactForm from "../components/portfolio/contactForm.vue";
import CircleBlueToGreen from "../components/CircleBlueToGreen.vue";
import CircleGreenToPink from "../components/CircleGreenToPink.vue";
import CirclePinkToBlue from "../components/CirclePinkToBlue.vue";
import SideMenu from "../components/nav/SideMenu.vue";
import UpButton from "../components/UpButton.vue";
import Social from "../components/portfolio/contactForm/Social.vue";
import PortfolioBodytext from "../components/portfolio/PortfolioBodyText.vue";
import PortfolioFotos from "../components/portfolio/aboutMe/PortfolioFotos.vue";
import PortfolioMainText from "../components/portfolio/PortfolioMainText.vue";
import PortfolioTitle from "../components/portfolio/aboutMe/PortfolioTitle.vue";
import PortfolioButton from "../components/portfolio/PortfolioButton.vue";
import PortfolioGalleryFotos from "../components/portfolio/gallery/PortfolioGalleryFotos.vue";
import SkillsTable from "../components/portfolio/Skill/SkillsTable.vue";
import SkillsType from "../components/portfolio/Skill/SkillType.vue";

const languages = [
  {
    name: "Java",
    level: "w-8/9",
  },
  {
    name: "C#",
    level: "w-3/4",
  },
  {
    name: "C / C++",
    level: "w-3/4",
  },
  {
    name: "Python",
    level: "w-1/2",
  },
  {
    name: "HTML / JavaScript / CSS",
    level: "w-1/2",
  },
];
</script>
