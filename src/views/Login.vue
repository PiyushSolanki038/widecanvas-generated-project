<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md">
      <form 
        @submit.prevent="handleLogin" 
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 neu-brutal"
      >
        <h2 class="text-2xl font-bold text-center mb-6">Admin Login</h2>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="neu-input w-full"
            placeholder="Enter your email"
          />
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            required
            class="neu-input w-full"
            placeholder="Enter your password"
          />
        </div>
        
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="neu-button w-full"
          >
            Sign In
          </button>
        </div>
        
        <p v-if="errorMessage" class="text-red-500 text-xs italic mt-4 text-center">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const handleLogin = () => {
  // Hardcoded credentials for demonstration
  if (email.value === 'admin@copperstore.com' && password.value === 'CopperAdmin2023!') {
    // Set authentication flag
    localStorage.setItem('isAuthenticated', 'true')
    
    // Redirect to dashboard
    router.push('/dashboard')
  } else {
    // Show error message
    errorMessage.value = 'Invalid email or password'
    
    // Clear inputs
    email.value = ''
    password.value = ''
  }
}
</script>
