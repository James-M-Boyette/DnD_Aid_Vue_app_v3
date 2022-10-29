<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NavView from "@/components/NavView.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header>
    <!-- <NavView /> -->
    <Navbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
