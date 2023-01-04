<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

window.onload = () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.getElementById("check").checked = false;
  } else {
    document.getElementById("check").checked = true;
  }
};

</script>

<template>
  <div id="mode" data-theme="dark">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
