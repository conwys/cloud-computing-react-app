<template>
  <div class="job-results">
    <h3>Latest Job Results</h3>
    <div v-if="loading" class="status">Loading…</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <ul v-else class="results">
      <li v-for="(row, idx) in results" :key="idx" class="result-item">
        <span class="label">{{ row.ReportName }}</span>
        <span class="value">{{ row.ResultValue }}</span>
        <span class="time">{{ formatTime(row.Timestamp) }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref('')
const results = ref([])

function formatTime(ts) {
  try {
    return new Date(ts).toLocaleString()
  } catch {
    return ts
  }
}

async function load() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('/api/auth/job-results')
    const json = await res.json()
    if (!json.success) throw new Error(json.message || 'Failed to fetch')
    results.value = json.data || []
  } catch (e) {
    error.value = e.message || String(e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<style scoped>
.job-results { margin: 1rem 0; }
.status { color: #666; }
.status.error { color: #b00020; }
.results { list-style: none; padding: 0; margin: 0; }
.result-item { display: grid; grid-template-columns: 1fr 2fr auto; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
.label { font-weight: 600; }
.value { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.time { color: #777; font-size: 0.9rem; }
</style>
