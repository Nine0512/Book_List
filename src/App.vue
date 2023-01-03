<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
</script>

<template>
  <div id="mode" data-theme="dark">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
