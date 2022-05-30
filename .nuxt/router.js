import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13b2506d = () => interopDefault(import('../pages/actividad-economica/_kpi.vue' /* webpackChunkName: "pages/actividad-economica/_kpi" */))
const _bdc51a88 = () => interopDefault(import('../pages/cuentas-nacionales/_kpi.vue' /* webpackChunkName: "pages/cuentas-nacionales/_kpi" */))
const _18fafc6e = () => interopDefault(import('../pages/politica-monetaria/_kpi.vue' /* webpackChunkName: "pages/politica-monetaria/_kpi" */))
const _64c4785e = () => interopDefault(import('../pages/precios-salarios/_kpi.vue' /* webpackChunkName: "pages/precios-salarios/_kpi" */))
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
    path: "/actividad-economica/:kpi?",
    component: _13b2506d,
    name: "actividad-economica-kpi"
  }, {
    path: "/cuentas-nacionales/:kpi?",
    component: _bdc51a88,
    name: "cuentas-nacionales-kpi"
  }, {
    path: "/politica-monetaria/:kpi?",
    component: _18fafc6e,
    name: "politica-monetaria-kpi"
  }, {
    path: "/precios-salarios/:kpi?",
    component: _64c4785e,
    name: "precios-salarios-kpi"
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
