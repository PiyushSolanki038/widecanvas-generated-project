<template>
  <div class="invoice-footer mt-6 grid grid-cols-2 gap-4">
    <div class="payment-details">
      <h3 class="font-bold mb-2">Payment Information</h3>
      <div class="bank-details">
        <p><strong>Bank Name:</strong> State Bank of India</p>
        <p><strong>Account Number:</strong> 12345678901</p>
        <p><strong>IFSC Code:</strong> SBIN0054321</p>
        <p><strong>UPI ID:</strong> copperstore@sbi</p>
      </div>
      <div class="payment-methods mt-4">
        <h4 class="font-semibold">Accepted Payment Methods</h4>
        <ul class="list-disc pl-5">
          <li>Bank Transfer</li>
          <li>UPI</li>
          <li>Cheque</li>
          <li>Online Payment</li>
        </ul>
      </div>
    </div>
    
    <div class="terms-and-conditions">
      <h3 class="font-bold mb-2">Terms & Conditions</h3>
      <ul class="list-disc pl-5 text-sm">
        <li>Payment is due within 15 days of invoice date</li>
        <li>Late payment will incur 1.5% monthly interest</li>
        <li>All disputes subject to Mumbai jurisdiction</li>
        <li>GST will be charged as applicable</li>
      </ul>
      
      <div class="signatures mt-6 grid grid-cols-2">
        <div class="receiver-signature text-center">
          <div class="h-20 border-b mb-2"></div>
          <p>Receiver's Signature</p>
        </div>
        <div class="company-signature text-center">
          <div class="h-20 border-b mb-2"></div>
          <p>Authorized Signatory</p>
        </div>
      </div>
    </div>
  </div>
</template>
