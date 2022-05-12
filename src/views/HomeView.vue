<script setup>
import IntroVue from "../components/Intro.vue";
import BetaSignVue from "../components/BetaSign.vue";
import PageFooter from "../components/PageFooter.vue";
import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <IntroVue class="" />
  <BetaSignVue class="" />
  <!-- <PageFooter /> -->
</template>

<style lang="scss" scoped>
.margin {
  margin-top: 8rem;
}
.margin1 {
  margin-top: 50rem;
}

@media (max-width: 991px) {
  .margin1 {
    margin-top: 10rem;
  }
}
</style>
