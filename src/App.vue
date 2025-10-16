<template>
  <div class="app">
    <Navigation />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<style>
.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
