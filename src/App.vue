<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import PageFooter from "./components/PageFooter.vue";
import NavbarVue from "./components/Navbar.vue";
const isLoggedIn = ref(false);
</script>

<template>
  <NavbarVue />
  <div class="main_body">
    <RouterView />
  </div>
  <PageFooter />
</template>

<style lang="scss" scoped>
.main_body {
  background-color: black;
}
</style>
