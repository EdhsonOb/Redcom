import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '../components/ProdVue.vue'
import ProductoDetalle from '../views/VistaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "carrito" */ '../views/AboutView.vue')
  },
  {
    path: '/productos/:id', // Cambiar la ruta para incluir el parámetro de ID
    component: ProductoDetalle
  },
  {
    path: '/productos',
    component: Productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
