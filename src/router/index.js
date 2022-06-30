import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Buscador from '../views/Buscador.vue'
import Peleadores from '../views/Peleadores.vue'
import Resultado from '../views/Resultado.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: Buscador
  },
  {
    path: '/peleadores',
    component: Peleadores
  },
  {
    path: '/peleadores/:id',
    component: Resultado
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
