<script setup lang="ts">
import { useLayoutSystem } from '@/vue-dynamic-layout-system';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const { setLayout } = useLayoutSystem()

setLayout('fif')

</script>

<template>
  <div>
    <h1> Other view </h1>
  </div>
</template>

