<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Smart City IoT Solutions</h1>
        <p class="hero-subtitle">
          Transforming UK cities with intelligent, data-driven technology. 
          From air quality to smart parking, we deliver IoT platforms that create sustainable, liveable communities.
        </p>
        <div class="hero-actions">
          <router-link to="/projects" class="btn btn-primary">View Our Projects</router-link>
          <router-link to="/contact" class="btn btn-outline">Get in Touch</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--brand-light) 0%, white 50%);
  padding: 6rem 0 5rem;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text) 0%, var(--brand) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 3rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
