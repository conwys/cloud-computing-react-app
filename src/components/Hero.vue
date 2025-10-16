<template>
  <section class="hero">
    <div class="hero-wrap">
      <div class="hero-content">
        <h1>Smart city IoT for public sector innovation</h1>
        <p>We build and operate connected solutions that make streets safer, transport smarter, and communities greener. Explore our live demonstrators across Milton Keynes.</p>
        <a class="btn" href="#contact">Talk to us</a>
      </div>
      <div class="card">
        <h3>About SmartThings Ltd</h3>
        <p>SmartThings Ltd is a UK startup delivering end‑to‑end IoT platforms for councils and public agencies — from sensors to insights.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(180deg, rgba(13, 110, 253, 0.06), rgba(13, 110, 253, 0));
}

.hero-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px 24px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
}

.hero-content h1 {
  font-size: 40px;
  line-height: 1.1;
  margin: 0 0 12px;
}

.hero-content p {
  color: var(--muted);
  font-size: 18px;
  margin: 0 0 16px;
}

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 24px rgba(2, 6, 23, 0.06);
}

.card h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.card p {
  margin: 0;
  color: var(--muted);
}

.btn {
  background: var(--brand);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.25);
  display: inline-block;
  transition: background 0.2s;
}

.btn:hover {
  background: var(--brand-dark);
}

@media (max-width: 900px) {
  .hero-wrap {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 32px;
  }
}
</style>
