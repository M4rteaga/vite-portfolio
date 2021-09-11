<template>
	<nav
		class="
			flex
			w-full
			items-center
			content-center
			justify-between
			px-4
			z-10
			bg-base-black
			h-12
			sm:px-8
			lg:px-12
		"
	>
		<router-link to="/">
			<h3
				class="
					font-normal
					text-white text-base
					transition
					ease-in-out
					duration-200
					hover:text-gray-300
				"
			>
				M4rteaga
			</h3>
		</router-link>
		<div v-if="menu">
			<div class="hidden md:flex flex-row text-white justify-around font-light">
				<a
					href="#aboutMe"
					class="transition ease-in-out duration-200 hover:text-gray-300"
				>
					<h3 class="px-4">About me</h3>
				</a>
				<a
					href="#gallery"
					class="transition ease-in-out duration-200 hover:text-gray-300"
				>
					<h3 class="px-4">Gallery</h3>
				</a>
				<a
					href="#skill"
					class="transition ease-in-out duration-200 hover:text-gray-300"
				>
					<h3 class="px-4">Skill</h3>
				</a>
				<a
					href="#contact"
					class="transition ease-in-out duration-200 hover:text-gray-300"
				>
					<h3 class="px-4">Contact</h3>
				</a>
			</div>
			<div class="md:hidden flex items-center">
				<button
					class="
						mr-2
						rounded-lg
						focus:outline-none
						focus:border-primary-solid
						focus:ring-1
						focus:ring-primary-solid
					"
					aria-label="Open Menu"
					@click="drawer"
				>
					<svg
						class="w-6 h-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
		<transition
			enter-class="opacity-0"
			enter-active-class="ease-out transition-medium"
			enter-to-class="opacity-50"
			leave-class="opacity-50"
			leave-active-class="ease-out transition-medium"
			leave-to-class="opacity-0"
		>
			<div
				@keydown.esc="isOpen = false"
				v-show="isOpen"
				class="z-100 fixed inset-0 transition-opacity"
			>
				<div
					@click="isOpen = false"
					class="absolute -inset-0 bg-black opacity-40"
				></div>
			</div>
		</transition>
		<aside
			class="
				transform
				top-0
				right-0
				w-1/2
				bg-base-white
				fixed
				h-1/3
				overflow-auto
				ease-in-out
				transition-all
				duration-300
				z-200
				rounded-l-2xl rounded-b-2xl
			"
			:class="isOpen ? 'translate-x-0' : 'translate-x-full'"
		>
			<div class="mt-6 mx-6 text-base text-base-black flex flex-col space-y-4">
				<a
					href="#aboutMe"
					class="
						px-2
						group
						rounded-lg
						transition
						ease-in-out
						duration-300
						hover:bg-base-black
					"
				>
					<h3
						class="
							text-base-lightBlack
							transition
							ease-in
							duration-300
							group-hover:text-white
						"
					>
						About me
					</h3>
				</a>
				<a
					href="#gallery"
					class="
						px-2
						group
						rounded-lg
						transition
						ease-in
						duration-300
						hover:bg-base-black
					"
				>
					<h3
						class="
							text-base-lightBlack
							transition
							ease-in
							duration-300
							group-hover:text-white
						"
					>
						Gallery
					</h3>
				</a>
				<a
					href="#skill"
					class="
						px-2
						group
						rounded-lg
						transition
						ease-in
						duration-300
						hover:bg-base-black
					"
				>
					<h3
						class="
							text-base-lightBlack
							transition
							ease-in
							duration-300
							group-hover:text-white
						"
					>
						Skill
					</h3>
				</a>
				<a
					href="#contact"
					class="
						px-2
						group
						rounded-lg
						transition
						ease-in-out
						duration-400
						hover:bg-base-black
					"
				>
					<h3
						class="
							text-base-lightBlack
							transition
							ease-in-out
							duration-400
							group-hover:text-white
						"
					>
						Contact
					</h3>
				</a>
			</div>
		</aside>
	</nav>
</template>

<script setup lang="ts">
	import router from '../../router';
	import { ref, onMounted, watch } from 'vue';

	//declare variables
	const isOpen = ref<Boolean>(false);
	const menu = ref<Boolean>(true);

	//methods
	const drawer = () => {
		isOpen.value = !isOpen.value as Boolean;
	};

	//whatch
	watch(isOpen, (newValue, oldValue) => {
		if (isOpen.value) document.body.style.setProperty('overflow', 'hidden');
		else document.body.style.removeProperty('overflow');
	});

	const defineMenu = () => {
		menu.value = router.currentRoute.value.path != '/';
	};

	const eventListener = () => {
		document.addEventListener('keydown', (e) => {
			if (isOpen.value) isOpen.value = false;
		});
	};

	onMounted(eventListener);
	onMounted(defineMenu);
</script>
