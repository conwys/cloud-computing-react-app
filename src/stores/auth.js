import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(localStorage.getItem('auth_token') || null);
  const loading = ref(false);
  const error = ref(null);

  const isAuthenticated = computed(() => !!token.value && !!user.value);

  const API_URL = import.meta.env.VITE_API_URL || 'http://172.166.116.129:3000/api';

  async function register(userData) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store token and user data
      token.value = data.data.token;
      user.value = data.data.user;
      localStorage.setItem('auth_token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      return { success: true, data: data.data };
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      loading.value = false;
    }
  }

  async function login(credentials) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and user data
      token.value = data.data.token;
      user.value = data.data.user;
      localStorage.setItem('auth_token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      return { success: true, data: data.data };
    } catch (err) {
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      loading.value = false;
    }
  }

  async function fetchUser() {
    if (!token.value) return;

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token.value}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        user.value = data.data.user;
        localStorage.setItem('user', JSON.stringify(data.data.user));
      } else {
        // Token invalid, logout
        logout();
      }
    } catch (err) {
      console.error('Fetch user error:', err);
      logout();
    }
  }

  function logout() {
    user.value = null;
    token.value = null;
    error.value = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }

  // Initialize from localStorage
  function initAuth() {
    const storedUser = localStorage.getItem('user');
    if (storedUser && token.value) {
      try {
        user.value = JSON.parse(storedUser);
        // Verify token is still valid
        fetchUser();
      } catch (err) {
        logout();
      }
    }
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
    fetchUser,
    initAuth,
  };
});
