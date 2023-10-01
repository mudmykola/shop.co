import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import CheckoutPage from '@/views/checkout/CheckoutPage';
import CasualPage from "@/views/casual/CasualPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Home Page' }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage,
    meta: { title: 'Checkout Page' }
  },
  {
    path: '/casual',
    name: 'casual',
    component: CasualPage,
    meta: { title: 'Casual Page' }
  },
  {
    path: '/shop',
    name: 'shop',
    meta: { title: 'Shop Page' }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
