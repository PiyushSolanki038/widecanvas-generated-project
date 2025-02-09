<template>
  <div class="line-items">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-100">
          <th class="border p-2">Sr. No.</th>
          <th class="border p-2">Description</th>
          <th class="border p-2">HSN Code</th>
          <th class="border p-2">Quantity</th>
          <th class="border p-2">Unit</th>
          <th class="border p-2">Rate</th>
          <th class="border p-2">Discount</th>
          <th class="border p-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lineItems" :key="index">
          <td class="border p-2 text-center">{{ index + 1 }}</td>
          <td class="border p-2">{{ item.description }}</td>
          <td class="border p-2 text-center">{{ item.hsnCode }}</td>
          <td class="border p-2 text-right">{{ item.quantity }}</td>
          <td class="border p-2 text-center">{{ item.unit }}</td>
          <td class="border p-2 text-right">₹{{ item.rate.toFixed(2) }}</td>
          <td class="border p-2 text-right">{{ item.discountPercent }}%</td>
          <td class="border p-2 text-right">₹{{ calculateLineTotal(item).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const lineItems = ref([
  {
    description: 'Copper Wire - Electrical Grade',
    hsnCode: '74081100',
    quantity: 500,
    unit: 'kg',
    rate: 750,
    discountPercent: 0
  },
  {
    description: 'Copper Sheet - Industrial Grade',
    hsnCode: '74092110',
    quantity: 250,
    unit: 'kg', 
    rate: 850,
    discountPercent: 5
  }
])

const calculateLineTotal = (item) => {
  const subtotal = item.quantity * item.rate
  const discountAmount = subtotal * (item.discountPercent / 100)
  return subtotal - discountAmount
}

const subtotal = computed(() => 
  lineItems.value.reduce((total, item) => 
    total + calculateLineTotal(item), 0
  )
)
</script>
