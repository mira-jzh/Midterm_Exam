import { createRouter, createWebHistory } from 'vue-router'

import Home from '../src/views/Home.vue'
import Mission from '../src/views/Missions.vue'
import Vision from '../src/views/Vision.vue'
import Developers from '../src/views/Developers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/mission', component: Mission },
  { path: '/vision', component: Vision },
  { path: '/developers', component: Developers }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
