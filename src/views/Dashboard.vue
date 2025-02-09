<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Admin Dashboard</h1>
      <div class="space-x-4">
        <button 
          @click="goToInvoice" 
          class="neu-button bg-green-500 text-white"
        >
          Create Invoice
        </button>
        <button 
          @click="logout" 
          class="neu-button bg-red-500 text-white"
        >
          Logout
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div 
        v-for="metric in metrics" 
        :key="metric.title" 
        class="neu-brutal p-4 text-center"
      >
        <h3 class="text-lg font-semibold">{{ metric.title }}</h3>
        <p class="text-2xl font-bold">{{ metric.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const metrics = ref([
  { title: 'Total Sales', value: '₹1,24,500' },
  { title: 'Total Stock', value: '1500 kg' },
  { title: 'Active Orders', value: 12 },
  { title: 'Low Stock Items', value: 3 }
])

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}

const goToInvoice = () => {
  router.push('/invoice')
}
</script>
