<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <div class="stat-icon">
            <component :is="stat.icon" :size="32" :stroke-width="1.5" />
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-change" :class="{ positive: stat.change > 0 }">
            {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}% this month
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Activity, Leaf, Radio, Users } from 'lucide-vue-next';

const stats = ref([
  { icon: Activity, value: '98.5%', label: 'System Uptime', change: 2.3 },
  { icon: Leaf, value: '15%', label: 'Emissions Reduced', change: 8.1 },
  { icon: Radio, value: '24', label: 'Active Sensors', change: 12.5 },
  { icon: Users, value: '3', label: 'Client Projects', change: 50.0 }
]);
</script>

<style scoped>
.stats-section {
  background: var(--bg-secondary);
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--bg);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  color: var(--brand);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.stat-change {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.stat-change.positive {
  color: var(--brand);
}
</style>
