<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-card card">
        <div class="auth-header">
          <h1>{{ isLogin ? 'Welcome Back' : 'Create Account' }}</h1>
          <p>{{ isLogin ? 'Sign in to your SmartThings account' : 'Join SmartThings IoT Platform' }}</p>
        </div>

        <form @submit.prevent="handleSubmit" class="auth-form">
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <div v-if="!isLogin" class="form-group">
            <label for="fullName">Full Name</label>
            <input
              id="fullName"
              v-model="formData.fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              :placeholder="isLogin ? 'Enter your password' : 'Create a password (min 6 characters)'"
              required
              :minlength="isLogin ? 1 : 6"
            />
          </div>

          <div v-if="!isLogin" class="form-group">
            <label for="organization">Organization (Optional)</label>
            <input
              id="organization"
              v-model="formData.organization"
              type="text"
              placeholder="Your company or institution"
            />
          </div>

          <button type="submit" class="btn-primary" :disabled="loading">
            {{ loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account') }}
          </button>
        </form>

        <div class="auth-footer">
          <p>
            {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
            <button @click="toggleMode" class="link-button">
              {{ isLogin ? 'Sign Up' : 'Sign In' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const isLogin = ref(true);
const loading = ref(false);
const errorMessage = ref('');

const formData = reactive({
  email: '',
  password: '',
  fullName: '',
  organization: ''
});

const toggleMode = () => {
  isLogin.value = !isLogin.value;
  errorMessage.value = '';
  formData.email = '';
  formData.password = '';
  formData.fullName = '';
  formData.organization = '';
};

const handleSubmit = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    let result;
    
    if (isLogin.value) {
      result = await authStore.login({
        email: formData.email,
        password: formData.password
      });
    } else {
      result = await authStore.register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        organization: formData.organization
      });
    }

    if (result.success) {
      // Redirect to dashboard
      router.push('/');
    } else {
      errorMessage.value = result.error || 'An error occurred. Please try again.';
    }
  } catch (error) {
    errorMessage.value = 'An unexpected error occurred. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--brand-light) 0%, var(--bg) 100%);
  padding: 2rem 1rem;
  transition: background 0.3s ease;
}

.auth-container {
  width: 100%;
  max-width: 450px;
}

.auth-card {
  padding: 3rem 2.5rem;
  background: var(--bg);
}

.auth-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.auth-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.auth-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.auth-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
}

.form-group input:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px var(--brand-light);
}

.error-message {
  background: #fee2e2;
  color: #991b1b;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  border-left: 4px solid #dc2626;
}

:global(body.dark-mode) .error-message {
  background: #7f1d1d;
  color: #fca5a5;
  border-left-color: #ef4444;
}

.btn-primary {
  width: 100%;
  padding: 1rem;
  background: var(--brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'DM Sans', sans-serif;
}

.btn-primary:hover:not(:disabled) {
  background: var(--brand-dark);
  color: white;
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.auth-footer p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.link-button {
  background: none;
  border: none;
  color: var(--brand);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-left: 0.5rem;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
}

.link-button:hover {
  text-decoration: underline;
}
</style>
