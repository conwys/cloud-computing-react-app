<template>
  <section class="features-section section">
    <div class="container">
      <div class="section-title">
        <h2>Our Core Solutions</h2>
        <p>Proven IoT technologies deployed across Milton Keynes demonstrator sites</p>
      </div>
      <div class="features-grid">
        <div class="feature-card card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon">
            <component :is="feature.icon" :size="48" :stroke-width="1.5" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <router-link to="/services" class="learn-more">Learn more →</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Wind, ParkingCircle, Bike } from 'lucide-vue-next';

const features = ref([
  {
    icon: Wind,
    title: 'Air Quality Monitoring',
    description: 'Real-time environmental sensors tracking PM2.5, NO2, and CO2 levels across the city to improve public health.'
  },
  {
    icon: ParkingCircle,
    title: 'Smart Parking',
    description: 'IoT-enabled parking spaces with live availability, reducing congestion and improving traffic flow.'
  },
  {
    icon: Bike,
    title: 'Active Travel Tracking',
    description: 'Data-driven insights into cycling and walking patterns to promote sustainable transport options.'
  }
]);
</script>

<style scoped>
.features-section {
  background: var(--bg);
  transition: background 0.3s ease;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  cursor: pointer;
}

.feature-icon {
  color: var(--brand);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.learn-more {
  color: var(--brand);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s;
  display: inline-block;
}

.learn-more:hover {
  transform: translateX(4px);
}
</style>
