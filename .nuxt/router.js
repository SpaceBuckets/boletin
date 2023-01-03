import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dd09f890 = () => interopDefault(import('../pages/actividad.vue' /* webpackChunkName: "pages/actividad" */))
const _04e48e4d = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _25872145 = () => interopDefault(import('../pages/kpi/_kpi.vue' /* webpackChunkName: "pages/kpi/_kpi" */))
const _5514d34d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e8f9f44c = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/actividad",
    component: _dd09f890,
    name: "actividad"
  }, {
    path: "/admin",
    component: _04e48e4d,
    name: "admin"
  }, {
    path: "/kpi/:kpi?",
    component: _25872145,
    name: "kpi-kpi"
  }, {
    path: "/",
    component: _5514d34d,
    name: "index"
  }, {
    path: "/*",
    component: _e8f9f44c,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
