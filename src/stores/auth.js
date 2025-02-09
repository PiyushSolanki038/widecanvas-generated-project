import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'

const SECRET_KEY = 'copper_store_secret_key_2023'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('admin_token') || null,
    user: null,
    loginAttempts: 0,
    lastLoginAttempt: null
  }),
  actions: {
    encrypt(data) {
      return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
    },
    decrypt(encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    },
    login(credentials) {
      // Simulated login with hardcoded credentials
      if (credentials.email === 'admin@copperstore.com' && credentials.password === 'CopperAdmin2023!') {
        const token = this.generateToken(credentials.email)
        this.token = token
        this.user = { 
          email: credentials.email, 
          role: 'SuperAdmin',
          department: 'Management'
        }
        localStorage.setItem('admin_token', token)
        return true
      }
      
      // Increment login attempts for potential security tracking
      this.loginAttempts++
      this.lastLoginAttempt = new Date()
      
      return false
    },
    generateToken(email) {
      const payload = {
        email,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }
      return this.encrypt(payload)
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('admin_token')
    },
    isAuthenticated() {
      if (!this.token) return false
      try {
        const decryptedToken = this.decrypt(this.token)
        return decryptedToken.exp > Date.now()
      } catch {
        return false
      }
    }
  }
})
