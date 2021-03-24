<template>
	<p
		class="duration-300 ease-in-out transform font-normal text-center text-base-lightBlack text-base mt-8 px-1.5 md:text-lg lg:text-xl"
	>
		{{ text }}
	</p>
</template>

<script setup lang="ts">
	import { defineProps } from 'vue';

	defineProps({
		text: {
			type: String,
			required: false,
		},
	});
</script>
