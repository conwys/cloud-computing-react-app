<template>
  <div class="dashboard-page">
    <Hero />
    <JobResults />
    <Features />
    <DemoMap />
    <Stats />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue';
import JobResults from '../components/JobResults.vue';
import Features from '../components/Features.vue';
import DemoMap from '../components/DemoMap.vue';
import Stats from '../components/Stats.vue';
</script>

<style scoped>
.dashboard-page {
  width: 100%;
}
</style>
