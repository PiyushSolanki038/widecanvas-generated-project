<template>
  <div class="invoice-container p-8 bg-white">
    <InvoiceHeader />
    <CustomerInfo />
    <InvoiceLineItems />
    <InvoiceSummary />
    <InvoiceFooter />
  </div>
</template>

<script setup>
import InvoiceHeader from '../components/InvoiceHeader.vue'
import CustomerInfo from '../components/CustomerInfo.vue'
import InvoiceLineItems from '../components/InvoiceLineItems.vue'
import InvoiceSummary from '../components/InvoiceSummary.vue'
import InvoiceFooter from '../components/InvoiceFooter.vue'
</script>

<style scoped>
.invoice-container {
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
