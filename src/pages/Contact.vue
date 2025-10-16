<template>
  <div class="contact-page">
    <section class="hero-section">
      <div class="container">
        <h1>Get in Touch</h1>
        <p class="subtitle">Let's discuss how we can help transform your city</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form card">
            <h3>Send us a message</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>
              <div class="form-group">
                <label for="organization">Organization</label>
                <input type="text" id="organization" v-model="form.organization" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-card card">
              <div class="icon"><Mail :size="28" /></div>
              <h4>Email</h4>
              <p>info@smartthings.co.uk</p>
            </div>
            <div class="info-card card">
              <div class="icon"><Phone :size="28" /></div>
              <h4>Phone</h4>
              <p>+44 (0) 1908 123 456</p>
            </div>
            <div class="info-card card">
              <div class="icon"><MapPin :size="28" /></div>
              <h4>Address</h4>
              <p>Innovation Centre<br>Milton Keynes<br>MK9 2NB</p>
            </div>
            <div class="info-card card">
              <div class="icon"><Clock :size="28" /></div>
              <h4>Business Hours</h4>
              <p>Mon-Fri: 9:00 - 17:00<br>Sat-Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Clock } from 'lucide-vue-next';

const form = ref({
  name: '',
  email: '',
  organization: '',
  message: ''
});

const handleSubmit = () => {
  alert('Thank you for your message! We will get back to you soon.');
  form.value = { name: '', email: '', organization: '', message: '' };
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--brand-light) 0%, white 100%);
  padding: 4rem 0 3rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-form h3 {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-light);
}

.contact-form .btn {
  width: 100%;
  margin-top: 1rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  padding: 1.5rem;
}

.info-card .icon {
  color: var(--brand);
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-card h4 {
  margin-bottom: 0.5rem;
  color: var(--text);
}

.info-card p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
