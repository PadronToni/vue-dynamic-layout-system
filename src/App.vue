<script setup lang="ts">
import LayoutSystemRoot from './vue-dynamic-layout-system/LayoutSystemRoot.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/other">Other</RouterLink>
    </nav>
  </header>
  <LayoutSystemRoot></LayoutSystemRoot>
</template>
