<script setup>
  import { ref, computed } from 'vue';
  import NavBar from './components/NavBar.vue';
</script>

<template>
  <body class="flex flex-col bg-[#F6F4F1] w-full h-screen overflow-hidden m-auto min-h-screen">
    <NavBar :class="{ 'hidden' : $route.name === 'NotFound' }" />
    <router-view />
  </body>
</template>


<style scoped>

</style>
