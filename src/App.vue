<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Navbar from "./components/Navbar.vue";
import FooterView from "./components/FooterView.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <!-- Reminder: this is a place-holder, and I need to make "loading" + "error" components ... maybe that are used on all pages -->
  <!-- <ul>
      <li class="text-danger" v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul> -->
  <FooterView />
</template>

<style scoped></style>
