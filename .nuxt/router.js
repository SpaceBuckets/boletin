import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50fa65b7 = () => interopDefault(import('../pages/actividad-economica.vue' /* webpackChunkName: "pages/actividad-economica" */))
const _0e88ce08 = () => interopDefault(import('../pages/cuentas-nacionales.vue' /* webpackChunkName: "pages/cuentas-nacionales" */))
const _3da06a4a = () => interopDefault(import('../pages/politica-monetaria.vue' /* webpackChunkName: "pages/politica-monetaria" */))
const _e7f5385a = () => interopDefault(import('../pages/precios-salarios.vue' /* webpackChunkName: "pages/precios-salarios" */))
const _5514d34d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/actividad-economica",
    component: _50fa65b7,
    name: "actividad-economica"
  }, {
    path: "/cuentas-nacionales",
    component: _0e88ce08,
    name: "cuentas-nacionales"
  }, {
    path: "/politica-monetaria",
    component: _3da06a4a,
    name: "politica-monetaria"
  }, {
    path: "/precios-salarios",
    component: _e7f5385a,
    name: "precios-salarios"
  }, {
    path: "/",
    component: _5514d34d,
    name: "index"
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
