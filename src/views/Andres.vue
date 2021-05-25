<template>
	<SideMenu id="navBar" />
	<main class="flex flex-col justify-center items-center">
		<div class="w-full flex flex-col items-center mt-15 px-10 max-w-screen-2xl">
			<div id="aboutMe" class="flex flex-col">
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
		<UpButton class="justify-self-end self-end mr-6" />

		<!-- Gallery -->

		<div
			id="gallery"
			class="relative w-full flex bg-base-grey mt-16 justify-center"
		>
			<div
				class="
					absolute
					flex
					w-46
					h-46
					z-20
					overflow-hidden
					transform
					rotate-180
					right-0
				"
			>
				<CircleGreenToPink
					class="
						w-46
						h-46
						backdrop-blur
						transform
						translate-y-23
						-translate-x-12
					"
				/>
			</div>
			<div class="absolute flex w-18 h-18 overflow-hidden bottom-0 left-0">
				<CircleBlueToGreen
					class="
						w-18
						h-18
						backdrop-blur
						transform
						-translate-x-1/2
						translate-y-1/2
					"
				/>
			</div>
			<div class="my-8 flex flex-col items-center justify-center w-full">
				<PortfolioMainText text="Gallery" />
				<div class="mt-4 mb-8 flex relative flex-row w-full justify-around">
					<PortfolioGalleryFotos imgName="img1.jpg" />
					<PortfolioGalleryFotos imgName="img2.jpg" />
					<PortfolioGalleryFotos imgName="img3.jpg" />
				</div>
			</div>
		</div>

		<div
			id="skill"
			class="
				relative
				w-full
				flex flex-col
				bg-indigo-600
				justify-center
				items-cente
				px-10
			"
		>
			<!-- Skills set -->
			<div class="flex flex-col justify-center my-8 items-center">
				<PortfolioMainText text="Skills" class="text-base-white" />
				<div class="w-full flex flex-wrap space-y-8 justify-around items-start">
					<div class="w-150">
						<SkillsType skillType="Languages" />
						<SkillsTable :skills="languages" />
					</div>
				</div>
			</div>
		</div>

		<div
			id="contact"
			class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10"
		>
			<PortfolioMainText text="Interests" class="text-black" />
			<div class="w-full flex flex-wrap justify-around items-start">
				<div
					class="
						flex flex-col
						items-center
						w-65
						h-70
						space-y-10
						rounded-2xl
						shadow-lg
					"
				>
					<div class="lg:text-2xl mt-5"><h2>Game Development</h2></div>
					<div class="w-25 h-25">
						<img src="../assets/joystick.svg" alt="" />
					</div>
				</div>

				<div
					class="
						flex flex-col
						items-center
						w-65
						h-70
						space-y-10
						rounded-2xl
						shadow-lg
					"
				>
					<div class="lg:text-2xl mt-5"><h2>Artificial Intelligence</h2></div>
					<div class="w-25 h-25">
						<img src="../assets/brain.svg" alt="" />
					</div>
				</div>

				<div
					class="
						flex flex-col
						items-center
						w-65
						h-70
						space-y-10
						rounded-2xl
						shadow-lg
					"
				>
					<div class="lg:text-2xl mt-5"><h2>Data Science</h2></div>
					<div class="w-25 h-25">
						<img src="../assets/hosting-server.svg" alt="" />
					</div>
				</div>

				<div
					class="
						flex flex-col
						items-center
						w-65
						h-70
						space-y-10
						rounded-2xl
						shadow-lg
					"
				>
					<div class="lg:text-2xl mt-5"><h2>UI and UX</h2></div>
					<div class="w-25 h-25">
						<img src="../assets/selected.svg" alt="" />
					</div>
				</div>

				<div
					class="
						flex flex-col
						items-center
						w-65
						h-70
						space-y-10
						rounded-2xl
						shadow-lg
					"
				>
					<div class="lg:text-2xl mt-5"><h2>Project Managment</h2></div>
					<div class="w-25 h-25">
						<img src="../assets/rocket-launch.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<h1 class="text-xl font-bold">Laravel Instagram API</h1>
			<div class="flex flex-row my-5 justify-center items-center">
				<h3 class="text-center align-middle">{{ user }}</h3>
				<a
					href="http://127.0.0.1:8000/"
					class="bg-blue-700 text-white py-2 px-3 ml-4 rounded-xl"
				>
					Follow
				</a>
			</div>

			<div class="flex flex-row mx-5 flex-wrap space-y-4 space-x-6">
				<ul v-for="(res, index) in response[0]">
					<div class="flex flex-row justify-center items-center">
						<img
							class="w-68 h-52 rounded-xl"
							:src="'http://127.0.0.1:8000/' + res.image"
							:alt="res.image"
						/>
						<p>{{ res.caption }}</p>
					</div>
				</ul>
			</div>
		</div>
		<!-- consumo api de laravel para mostrar mis publicaciones -->
		<div
			class="w-full flex flex-col items-center justify-center mb-20 mt-10 px-10"
		>
			<ContactForm />
		</div>
	</main>
</template>

<script setup lang="ts">
	import ContactForm from '../components/portfolio/contactForm.vue';
	import CircleBlueToGreen from '../components/CircleBlueToGreen.vue';
	import CircleGreenToPink from '../components/CircleGreenToPink.vue';
	import CirclePinkToBlue from '../components/CirclePinkToBlue.vue';
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

	import axios from 'axios';

	import { reactive, ref } from 'vue';

	let response = ref();

	const user = 'andresvelez11';

	const languages = [
		{
			name: 'Java',
			level: 'w-8/9',
		},
		{
			name: 'C#',
			level: 'w-3/4',
		},
		{
			name: 'C / C++',
			level: 'w-3/4',
		},
		{
			name: 'Python',
			level: 'w-1/2',
		},
		{
			name: 'HTML / JavaScript / CSS',
			level: 'w-1/2',
		},
	];

	//consumo la api
	axios.get(`http://localhost/api/user/posts/${user}`).then((res) => {
		console.log(res);
		response.value = res.data;
	});
</script>
