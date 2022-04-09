<script setup>
import IntroVue from "../components/Intro.vue";
import LearnVue from "../components/Learn.vue";
import ActionBannerVue from "../components/ActionBanner.vue";
import BetaSignVue from "../components/BetaSign.vue";
import PageFooter from "../components/PageFooter.vue";
import NavbarVue from "../components/Navbar.vue";
</script>

<template>
  <NavbarVue />
  <IntroVue class="margin" />
  <LearnVue class="margin" />
  <ActionBannerVue class="margin" />
  <BetaSignVue class="margin1" />
  <PageFooter />
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
