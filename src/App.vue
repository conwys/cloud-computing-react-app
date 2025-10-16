<template>
  <div class="app">
    <Header />
    <Hero />
    <Features />
    <DemoMap />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import DemoMap from './components/DemoMap.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
}
</style>
