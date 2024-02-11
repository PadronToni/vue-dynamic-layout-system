<script setup lang="ts">
import { useLayoutSystem } from '@/vue-dynamic-layout-system';

const { layout } = useLayoutSystem()
</script>

<template>
  <main>
    <h1> Home view </h1>
    <span> there is the layout: {{ layout }} </span>
  </main>
</template>
