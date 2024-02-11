<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLayoutSystem, type LayoutComponentLike } from '.';

const LS = useLayoutSystem()
const router = useRouter()

router.afterEach((to) => {
	LS.layout.value = to.meta.layout as LayoutComponentLike ?? 'div'
})

</script>

<template>
	<component :is="LS.layout.value">
		<RouterView></RouterView>
	</component>
</template>

