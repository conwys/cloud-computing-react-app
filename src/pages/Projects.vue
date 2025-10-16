<template>
  <div class="projects-page">
    <section class="hero-section">
      <div class="container">
        <h1>Milton Keynes Projects</h1>
        <p class="subtitle">Live demonstrators showcasing smart city technology in action</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <DemoMap />
      </div>
    </section>

    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="projects-grid">
          <div class="project-card card" v-for="project in projects" :key="project.title">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <span class="status-badge" :class="project.status">{{ project.status }}</span>
            </div>
            <p class="location">📍 {{ project.location }}</p>
            <p>{{ project.description }}</p>
            <div class="project-stats">
              <div class="stat">
                <strong>{{ project.sensors }}</strong>
                <span>Sensors</span>
              </div>
              <div class="stat">
                <strong>{{ project.uptime }}</strong>
                <span>Uptime</span>
              </div>
              <div class="stat">
                <strong>{{ project.since }}</strong>
                <span>Active Since</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DemoMap from '../components/DemoMap.vue';

const projects = ref([
  {
    title: 'Central Milton Keynes Air Quality',
    location: 'MK Central Business District',
    description: 'Network of air quality sensors monitoring PM2.5, PM10, NO2, and CO2 levels in the city center. Data feeds into the UK Air Quality Index.',
    sensors: 12,
    uptime: '99.2%',
    since: '2023',
    status: 'active'
  },
  {
    title: 'Stadium MK Smart Parking',
    location: 'Stadium Way, MK1',
    description: 'IoT parking sensors deployed across 500+ spaces at Stadium MK. Provides real-time availability data through mobile app and dynamic signage.',
    sensors: 8,
    uptime: '97.8%',
    since: '2024',
    status: 'active'
  },
  {
    title: 'Bletchley Park Active Travel',
    location: 'Bletchley Park',
    description: 'Cycle and pedestrian counters monitoring usage of the heritage trail. Data informs transport policy and infrastructure investment.',
    sensors: 4,
    uptime: '98.5%',
    since: '2023',
    status: 'active'
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
  max-width: 700px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-card h3 {
  margin-bottom: 0;
  flex: 1;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.active {
  background: var(--brand-light);
  color: var(--brand-dark);
}

.location {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat strong {
  font-size: 1.5rem;
  color: var(--brand);
}

.stat span {
  font-size: 0.85rem;
  color: var(--text-muted);
}
</style>
