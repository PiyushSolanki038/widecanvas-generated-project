<template>
  <div class="invoice-summary grid grid-cols-2 gap-4 mt-6">
    <div class="tax-breakup">
      <h3 class="font-bold mb-2">Tax Breakup</h3>
      <table class="w-full border-collapse">
        <tr>
          <td class="border p-2">Subtotal</td>
          <td class="border p-2 text-right">₹{{ subtotal.toFixed(2) }}</td>
        </tr>
        <tr>
          <td class="border p-2">CGST (9%)</td>
          <td class="border p-2 text-right">₹{{ (subtotal * 0.09).toFixed(2) }}</td>
        </tr>
        <tr>
          <td class="border p-2">SGST (9%)</td>
          <td class="border p-2 text-right">₹{{ (subtotal * 0.09).toFixed(2) }}</td>
        </tr>
        <tr>
          <td class="border p-2">Shipping Charges</td>
          <td class="border p-2 text-right">₹{{ shippingCharges.toFixed(2) }}</td>
        </tr>
      </table>
    </div>
    
    <div class="total-section">
      <table class="w-full border-collapse">
        <tr class="bg-gray-100">
          <td class="border p-2 font-bold">Total Before Tax</td>
          <td class="border p-2 text-right font-bold">₹{{ subtotal.toFixed(2) }}</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border p-2 font-bold">Total Tax</td>
          <td class="border p-2 text-right font-bold">₹{{ (subtotal * 0.18).toFixed(2) }}</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border p-2 font-bold text-xl">Grand Total</td>
          <td class="border p-2 text-right font-bold text-xl">₹{{ grandTotal.toFixed(2) }}</td>
        </tr>
      </table>
      <div class="amount-in-words mt-4">
        <strong>Amount in Words:</strong>
        {{ convertToWords(grandTotal) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const subtotal = ref(425000) // From previous component
const shippingCharges = ref(500)

const grandTotal = computed(() => 
  subtotal.value + (subtotal.value * 0.18) + shippingCharges.value
)

const convertToWords = (num) => {
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen ']
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

  const convertLessThanOneThousand = (n) => {
    if (n < 20) return a[n]
    const digits = n.toString().split('').map(Number)
    if (digits.length === 2) {
      return b[digits[0]] + (digits[1] !== 0 ? ' ' + a[digits[1]] : '')
    }
    return a[digits[0]] + 'Hundred ' + (n % 100 !== 0 ? convertLessThanOneThousand(n % 100) : '')
  }

  const convert = (n) => {
    if (n === 0) return 'Zero'
    const arr = []
    const units = ['', 'Thousand ', 'Lakh ', 'Crore ']
    let index = 0

    while (n > 0) {
      if (n % 1000 !== 0) {
        arr.unshift(convertLessThanOneThousand(n % 1000) + units[index])
      }
      n = Math.floor(n / 1000)
      index++
    }

    return arr.join('').trim() + ' Rupees Only'
  }

  return convert(Math.round(num))
}
</script>
