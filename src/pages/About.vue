<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="container">
        <h1>About SmartThings Ltd</h1>
        <p class="subtitle">Pioneering smart city IoT solutions for a sustainable future</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Who We Are</h2>
            <p>
              SmartThings Ltd is a UK-based startup specializing in smart city IoT solutions for public sector clients. 
              Founded in 2022, we're passionate about using technology to create more sustainable, efficient, and 
              liveable urban environments.
            </p>
            <p>
              Our team combines expertise in IoT hardware, data analytics, and urban planning to deliver end-to-end 
              solutions that generate real, measurable impact for communities.
            </p>
          </div>
          <div class="about-image">
            <div class="placeholder-image">
              <svg width="100%" height="300" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="var(--brand-light)" rx="12"/>
                <text x="200" y="150" text-anchor="middle" fill="var(--brand)" font-size="48" font-weight="700">🏙️</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-title">
          <h2>Our Mission</h2>
          <p>Empowering cities with intelligent, data-driven decision making</p>
        </div>
        
        <div class="values-grid">
          <div class="value-card card">
            <div class="value-icon"><Target :size="40" :stroke-width="1.5" /></div>
            <h3>Purpose-Driven</h3>
            <p>Every solution addresses real challenges faced by local authorities and communities.</p>
          </div>
          <div class="value-card card">
            <div class="value-icon"><Shield :size="40" :stroke-width="1.5" /></div>
            <h3>Security First</h3>
            <p>Enterprise-grade encryption and compliance with UK data protection standards.</p>
          </div>
          <div class="value-card card">
            <div class="value-icon"><Leaf :size="40" :stroke-width="1.5" /></div>
            <h3>Sustainable</h3>
            <p>Low-power devices and carbon-conscious infrastructure design.</p>
          </div>
          <div class="value-card card">
            <div class="value-icon"><Handshake :size="40" :stroke-width="1.5" /></div>
            <h3>Collaborative</h3>
            <p>Working closely with councils, residents, and stakeholders throughout deployment.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Why Milton Keynes?</h2>
        </div>
        <div class="mk-content">
          <p>
            Milton Keynes, as a planned city with forward-thinking urban design, provides the perfect testing ground 
            for innovative smart city technologies. Our partnership with MK Council has enabled us to deploy and refine 
            our solutions in a real-world environment.
          </p>
          <p>
            The city's commitment to sustainability and innovation aligns perfectly with our mission, making it an 
            ideal location for our flagship demonstrator projects.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Target, Shield, Leaf, Handshake } from 'lucide-vue-next';
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
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  margin-bottom: 1.5rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.placeholder-image {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  text-align: center;
}

.value-icon {
  color: var(--brand);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.value-card h3 {
  margin-bottom: 1rem;
}

.mk-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mk-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
