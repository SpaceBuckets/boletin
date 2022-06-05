export { default as ChartsBar } from '../../components/charts/bar.js'
export { default as ChartsGenericLine } from '../../components/charts/genericLine.vue'
export { default as ChartsGenericTable } from '../../components/charts/genericTable.vue'
export { default as ChartsKpinav } from '../../components/charts/kpinav.vue'
export { default as ChartsLine } from '../../components/charts/line.js'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
