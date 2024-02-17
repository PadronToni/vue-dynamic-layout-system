<script setup lang="ts">
import { RouterView } from 'vue-router';

const fif = defineSlots<{
	aside: () => boolean | undefined
}>()
</script>
<template>
	<div>

		<main class="container p-4 mt-6 bg-zinc-800">
			<RouterView></RouterView>
		</main>

		<aside v-if="fif.aside">
			<component :is="fif.aside"> </component>
		</aside>

	</div>
</template>


<style scoped></style>