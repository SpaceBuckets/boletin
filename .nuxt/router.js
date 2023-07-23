import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5514d34d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8b8f8ee6 = () => interopDefault(import('../pages/search/_.vue' /* webpackChunkName: "pages/search/_" */))
const _bed56b22 = () => interopDefault(import('../pages/_cat/index.vue' /* webpackChunkName: "pages/_cat/index" */))
const _51792edb = () => interopDefault(import('../pages/_cat/_kpi/index.vue' /* webpackChunkName: "pages/_cat/_kpi/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5514d34d,
    name: "index"
  }, {
    path: "/search/*",
    component: _8b8f8ee6,
    name: "search-all"
  }, {
    path: "/:cat",
    component: _bed56b22,
    name: "cat"
  }, {
    path: "/:cat/:kpi",
    component: _51792edb,
    name: "cat-kpi"
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
