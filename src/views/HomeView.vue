<script setup>
import IntroVue from '../components/Intro.vue';
import LearnVue from '../components/Learn.vue';
import ActionBannerVue from '../components/ActionBanner.vue';
</script>

<template>
    <IntroVue class="margin" />
    <LearnVue class="margin" />
    <ActionBannerVue class="margin" />
</template>



<style lang="scss" scoped>
.margin {
    margin-top: 8rem;
}
</style>