import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import InvoiceView from '../views/InvoiceView.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/login'
  },
  { 
    path: '/login', 
    component: Login,
    name: 'Login'
  },
  { 
    path: '/dashboard', 
    component: Dashboard,
    name: 'Dashboard',
    meta: { requiresAuth: true }
  },
  {
    path: '/invoice',
    component: InvoiceView,
    name: 'Invoice',
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
