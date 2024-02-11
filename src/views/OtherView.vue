<script setup lang="ts">
import { useLayoutSystem } from '@/vue-dynamic-layout-system';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const { layout, setLayout } = useLayoutSystem()

setLayout(DefaultLayout)

</script>

<template>
  <div>
    <h1> Other view </h1>
    <span> there is the layout: {{ layout }} </span>
  </div>
</template>

