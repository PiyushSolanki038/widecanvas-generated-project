<template>
  <div class="customer-info grid grid-cols-2 gap-4 mb-6 border-b pb-4">
    <div class="billing-address">
      <h3 class="font-bold mb-2">Billing Address</h3>
      <address class="not-italic">
        {{ customer.billingName }}<br>
        {{ customer.billingAddress }}<br>
        {{ customer.city }}, {{ customer.state }} {{ customer.pincode }}<br>
        State: {{ customer.state }}
        <div class="mt-2">
          <p><strong>GSTIN:</strong> {{ customer.gstNumber }}</p>
          <p><strong>Customer ID:</strong> {{ customer.customerId }}</p>
        </div>
      </address>
    </div>
    
    <div class="shipping-address">
      <h3 class="font-bold mb-2">Shipping Address</h3>
      <address class="not-italic">
        {{ customer.shippingName || customer.billingName }}<br>
        {{ customer.shippingAddress || customer.billingAddress }}<br>
        {{ customer.city }}, {{ customer.state }} {{ customer.pincode }}<br>
        State: {{ customer.state }}
        <div class="mt-2">
          <p><strong>Contact Person:</strong> {{ customer.contactPerson }}</p>
          <p><strong>Phone:</strong> {{ customer.phone }}</p>
          <p><strong>Email:</strong> {{ customer.email }}</p>
        </div>
      </address>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const customer = ref({
  billingName: 'ABC Manufacturing Pvt. Ltd.',
  billingAddress: '456 Industrial Park',
  shippingName: '',
  shippingAddress: '',
  city: 'Mumbai',
  state: 'Maharashtra',
  pincode: '400601',
  gstNumber: '27AAPCA2483C1ZT',
  customerId: 'CUST-0987',
  contactPerson: 'Rajesh Kumar',
  phone: '+91 98765 43210',
  email: 'rajesh@abcmanufacturing.com'
})
</script>
