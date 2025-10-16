<template>
  <div class="features">
    <div class="card-grid">
      <div class="card">
        <h3>Air Quality</h3>
        <p>Real‑time monitoring around schools and busy corridors.</p>
      </div>
      <div class="card">
        <h3>Smart Parking</h3>
        <p>Live bay occupancy and guidance to reduce congestion.</p>
      </div>
      <div class="card">
        <h3>Active Travel</h3>
        <p>People‑centric data to design safer walking & cycling routes.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  padding: 0 20px;
}

.card-grid {
  max-width: 1100px;
  margin: 26px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 24px rgba(2, 6, 23, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(2, 6, 23, 0.1);
}

.card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: var(--text);
}

.card p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
