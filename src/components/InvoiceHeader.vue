<template>
  <div class="invoice-header grid grid-cols-2 gap-4 mb-6">
    <div class="company-info">
      <img 
        :src="companyLogo" 
        alt="Copper Store Logo" 
        class="w-32 mb-4"
      />
      <h1 class="text-2xl font-bold">{{ companyName }}</h1>
      <address class="not-italic text-sm">
        {{ companyAddress }}
        <div class="contact-details mt-2">
          <p>Phone: {{ companyPhone }}</p>
          <p>Email: {{ companyEmail }}</p>
          <p>Website: {{ companyWebsite }}</p>
        </div>
        <div class="tax-info mt-2">
          <p>GST Registration: {{ gstNumber }}</p>
          <p>CIN: {{ cinNumber }}</p>
        </div>
      </address>
    </div>
    
    <div class="invoice-details text-right">
      <h2 class="text-3xl font-bold text-primary mb-4">
        TAX INVOICE
      </h2>
      <div class="invoice-meta space-y-2">
        <p>
          <strong>Invoice Number:</strong> 
          {{ invoicePrefix }}{{ invoiceNumber.toString().padStart(4, '0') }}
        </p>
        <p>
          <strong>Invoice Date:</strong> 
          {{ formatDate(invoiceDate) }}
        </p>
        <p>
          <strong>Due Date:</strong> 
          {{ formatDate(dueDate) }}
        </p>
        <p>
          <strong>Payment Terms:</strong> 
          {{ paymentTerms }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import companyLogo from '../assets/logo.png'

const companyName = ref('Copper Store Pvt. Ltd.')
const companyAddress = ref('123 Industrial Zone, Mumbai, Maharashtra 400001')
const companyPhone = ref('+91 22 1234 5678')
const companyEmail = ref('sales@copperstore.com')
const companyWebsite = ref('www.copperstore.com')
const gstNumber = ref('07AATCA2481C1Z0')
const cinNumber = ref('U74999MH2020PTC345678')

const invoicePrefix = ref('CS-INV-')
const invoiceNumber = ref(1024)
const invoiceDate = ref(new Date())
const dueDate = ref(new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)) // 15 days from now
const paymentTerms = ref('Net 15 Days')

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
</script>
