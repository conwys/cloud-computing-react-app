<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#10b981"/>
            <path d="M16 8v16M8 16h16" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>SmartThings</span>
        </router-link>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link">Dashboard</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>

        <div class="nav-actions">
          <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
          <router-link to="/contact" class="btn btn-primary">Get Started</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark-mode');
};
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text);
  text-decoration: none;
  transition: opacity 0.2s;
}

.logo:hover {
  opacity: 0.8;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--brand);
  background: var(--brand-light);
}

.nav-link.router-link-active {
  color: var(--brand);
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.2s;
}

.theme-toggle:hover {
  background: var(--brand-light);
  color: var(--brand);
  border-color: var(--brand);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
