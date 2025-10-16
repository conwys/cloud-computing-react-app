<template>
  <footer id="contact" class="footer">
    <div class="footer-wrap">
      <span>© {{ currentYear }} SmartThings Ltd · Milton Keynes, UK</span>
      <span>Contact: hello@smartthings.example</span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  margin-top: 24px;
}

.footer-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 20px;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
}

@media (max-width: 600px) {
  .footer-wrap {
    flex-direction: column;
    text-align: center;
  }
}
</style>
