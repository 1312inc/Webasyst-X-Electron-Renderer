import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAppState } from '@/composables/appState'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Demo from '../views/Demo.vue'
import PageCreateCloud from '../components/pages/PageCreateCloud.vue'
import PageInstallation from '../components/pages/PageInstallation.vue'
import PageInstallCashApp from '../components/pages/PageInstallCashApp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'installation/:id',
        name: 'Installation',
        component: PageInstallation
      },
      {
        path: 'cloud',
        name: 'Cloud',
        component: PageCreateCloud
      },
      {
        path: 'installApp',
        name: 'InstallApp',
        component: PageInstallCashApp
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  useAppState.removeAppInView()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = await useAppState.token()

    if (token) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

export default router
