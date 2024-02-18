<script setup lang="ts">
import { useLayoutSystem } from '@/vue-dynamic-layout-system';
import { useLS } from '@/layouts/layoutSystem';

const { layout } = useLS()
const { setLayout } = useLayoutSystem()

setLayout('fif')
console.log('eccolo: ', layout);

</script>

<template>
  <div>
    <h1> Other view </h1>
  </div>
</template>

