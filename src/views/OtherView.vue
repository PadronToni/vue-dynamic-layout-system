<script setup lang="ts">
import { useLayoutSystem } from '@/vue-dynamic-layout-system';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { sas } from '@/layouts/layoutSystem';

const { layout } = sas()
const { setLayout } = useLayoutSystem()

setLayout('fif')
console.log('eccolo: ', layout);


</script>

<template>
  <div>
    <h1> Other view </h1>
  </div>
</template>

