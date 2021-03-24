<template>
	<div class="relative h-full">
		<SideMenu id="navBar" />
		<main class="flex flex-col justify-center items-center z-0">
			<!-- About me -->
			<div
				id="aboutMe"
				class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl group"
			>
				<div class="flex flex-col">
					<div
						class="flex flex-col md:flex-row-reverse md:justify-between lg:justify-around"
					>
						<PortfolioFotos imgName="mateo.webp" altTag="Profile picture" />
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
						<DownloadButton
							class="self-center bg-secondary-green-solid transition ease-in-out duration-300 hover:bg-secondary-green-dark"
							content="Resume"
						/>
					</div>
				</div>
			</div>
			<UpButton class="justify-self-end self-end mr-6" />
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
					<div class="mt-4 mb-8 flex relative flex-row w-full justify-around">
						<div class="hidden lg:flex flex-row justify-around w-full">
							<PortfolioGalleryFotos
								imgName="Portfolio.webp"
								class=""
								backColor="bg-primary-solid"
							/>
							<PortfolioGalleryFotos
								imgName="Hidia.webp"
								backColor="bg-secondary-green-solid"
							/>
							<PortfolioGalleryFotos imgName="GraceHooper.webp" class="" />
						</div>
						<!-- //Animation -->
						<div class="lg:hidden">
							<button
								class="mb-4 bg-primary-solid px-3 py-2 text-white rounded-lg hover:bg-blue-600"
								@click="printStatus"
							>
								toggle animation
							</button>
							<transition name="slide-fade">
								<PortfolioGalleryFotos
									v-show="animationStatus.status"
									imgName="Portfolio.webp"
									backColor="bg-primary-solid"
								/>
							</transition>
						</div>
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
				<div>
					<Social :Address="address" />
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import CircleBlueToGreen from '../components/CircleBlueToGreen.vue';
	import CircleGreenToPink from '../components/CircleGreenToPink.vue';
	import CirclePinkToBlue from '../components/CirclePinkToBlue.vue';
	import ContactForm from '../components/portfolio/contactForm.vue';
	import SideMenu from '../components/nav/SideMenu.vue';
	import UpButton from '../components/UpButton.vue';
	import Social from '../components/portfolio/contactForm/Social.vue';
	import PortfolioBodytext from '../components/portfolio/aboutMe/PortfolioBodyText.vue';
	import PortfolioFotos from '../components/portfolio/aboutMe/PortfolioFotos.vue';
	import PortfolioMainText from '../components/portfolio/PortfolioMainText.vue';
	import PortfolioTitle from '../components/portfolio/aboutMe/PortfolioTitle.vue';
	import PortfolioButton from '../components/portfolio/PortfolioButton.vue';
	import PortfolioGalleryFotos from '../components/portfolio/gallery/PortfolioGalleryFotos.vue';
	import SkillsTable from '../components/portfolio/Skill/SkillsTable.vue';
	import SkillsType from '../components/portfolio/Skill/SkillType.vue';
	import DownloadButton from '../components/portfolio/aboutMe/DownloadButton.vue';

	import { languages, frameworks, address, imgs } from '../MateoData';
	import { reactive } from 'vue';

	const animationStatus = reactive({ status: false });

	const printStatus = () => {
		animationStatus.status = !animationStatus.status;
	};
</script>

<style scoped>
	/* Enter and leave animations can use different */
	/* durations and timing functions.              */
	.slide-fade-enter-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-enter-from {
		transform: translateX(-100vw);
		opacity: 0;
	}

	.slide-fade-leave-to {
		transform: translateX(100vw);
		opacity: 0;
	}
</style>
