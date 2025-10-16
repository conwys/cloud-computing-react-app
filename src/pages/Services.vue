<template>
  <div class="services-page">
    <section class="hero-section">
      <div class="container">
        <h1>Our Services</h1>
        <p class="subtitle">Comprehensive smart city IoT solutions for the public sector</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card card" v-for="service in services" :key="service.title">
            <div class="service-icon">
              <component :is="service.icon" :size="56" :stroke-width="1.5" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="feature-list">
              <li v-for="feature in service.features" :key="feature">
                <Check :size="16" :stroke-width="2.5" />
                {{ feature }}
              </li>
            </ul>
            <button class="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Wind, ParkingCircle, Bike, Lightbulb, Trash2, Droplets, Check } from 'lucide-vue-next';

const services = ref([
  {
    icon: Wind,
    title: 'Air Quality Monitoring',
    description: 'Real-time environmental sensing and pollution tracking across urban areas.',
    features: [
      'PM2.5 & PM10 detection',
      'NO2 and CO2 monitoring',
      'Real-time dashboards',
      'Automated alerts'
    ]
  },
  {
    icon: ParkingCircle,
    title: 'Smart Parking Solutions',
    description: 'Intelligent parking management to reduce congestion and improve efficiency.',
    features: [
      'Occupancy sensors',
      'Mobile app integration',
      'Dynamic pricing',
      'Analytics reporting'
    ]
  },
  {
    icon: Bike,
    title: 'Active Travel Tracking',
    description: 'Monitor cycling and walking patterns to promote sustainable transport.',
    features: [
      'Pedestrian counting',
      'Cycle lane usage',
      'Route optimization',
      'Safety analytics'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Adaptive street lighting that responds to real-time conditions.',
    features: [
      'Motion-activated LEDs',
      'Energy consumption tracking',
      'Remote control',
      'Fault detection'
    ]
  },
  {
    icon: Trash2,
    title: 'Waste Management',
    description: 'Optimize collection routes and reduce operational costs.',
    features: [
      'Fill-level sensors',
      'Route optimization',
      'Collection scheduling',
      'Cost reduction'
    ]
  },
  {
    icon: Droplets,
    title: 'Flood Monitoring',
    description: 'Early warning systems for flood-prone areas.',
    features: [
      'Water level sensors',
      'Weather integration',
      'SMS/email alerts',
      'Historical data'
    ]
  }
]);
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--brand-light) 0%, var(--bg) 100%);
  padding: 4rem 0 3rem;
  text-align: center;
  transition: background 0.3s ease;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-card {
  text-align: center;
}

.service-icon {
  color: var(--brand);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-card h3 {
  margin-bottom: 1rem;
  color: var(--text);
}

.service-card p {
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  text-align: left;
  margin-bottom: 2rem;
}

.feature-list li {
  padding: 0.5rem 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-list li svg {
  color: var(--brand);
  flex-shrink: 0;
}

.service-card .btn {
  width: 100%;
}
</style>
