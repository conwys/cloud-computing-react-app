<template>
  <div class="map-section" id="demo-map">
    <div class="map-wrap">
      <h2>Milton Keynes Demonstrators</h2>
      <div ref="mapContainer" class="map"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'

const mapContainer = ref(null)

onMounted(() => {
  const mk = [52.0406, -0.7594]
  const map = L.map(mapContainer.value, { scrollWheelZoom: false }).setView(mk, 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const points = [
    {
      name: 'MK Central Station – Smart Mobility Hub',
      coords: [52.0340, -0.7736],
      desc: 'Live mobility & footfall analytics for safer, smoother journeys.'
    },
    {
      name: 'Stadium MK – Event Traffic Optimisation',
      coords: [52.0092, -0.7436],
      desc: 'Parking guidance and congestion monitoring during events.'
    },
    {
      name: 'Bletchley Park – Air Quality Pilot',
      coords: [51.9979, -0.7405],
      desc: 'Community sensors tracking NO₂ and PM levels in real time.'
    }
  ]

  points.forEach(p => {
    L.marker(p.coords)
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br/>${p.desc}`)
  })
})
</script>

<style scoped>
.map-section {
  padding: 0 20px;
  margin-bottom: 34px;
}

.map-wrap {
  max-width: 1100px;
  margin: 10px auto;
}

.map-wrap h2 {
  margin: 0 0 10px 0;
  font-size: 28px;
}

.map {
  height: 420px;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: 0 6px 24px rgba(2, 6, 23, 0.06);
  z-index: 1;
}
</style>
