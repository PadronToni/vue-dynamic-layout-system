<script setup lang="ts">
import { LayoutSystemRoot } from './vue-dynamic-layout-system/LayoutSystemRoot';
</script>

<template>
  <header>
    <nav class="flex items-center gap-2 p-2 bg-emerald-600 text-white">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/other">Other</RouterLink>
    </nav>
  </header>
  <LayoutSystemRoot></LayoutSystemRoot>
</template>
