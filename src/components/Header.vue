<template>
  <header class="header">
    <div class="nav">
      <div class="logo">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="logo-icon">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm1-13h-2v6l5 3 .999-1.732L13 12.535Z"/>
        </svg>
        <span>SmartThings Ltd</span>
      </div>
      <button class="btn" @click="scrollToMap">View Demonstrators</button>
    </div>
  </header>
</template>

<script setup>
const scrollToMap = () => {
  const mapSection = document.getElementById('demo-map')
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--brand);
  font-size: 1.1rem;
}

.logo-icon {
  width: 28px;
  height: 28px;
  fill: var(--brand);
}

.btn {
  background: var(--brand);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(13, 110, 253, 0.25);
  transition: background 0.2s;
}

.btn:hover {
  background: var(--brand-dark);
}
</style>
