export { default as ActividadBox } from '../../components/actividad/box.vue'
export { default as ActividadEmae } from '../../components/actividad/emae.vue'
export { default as ActividadIpi } from '../../components/actividad/ipi.vue'
export { default as ActividadIsac } from '../../components/actividad/isac.vue'
export { default as ActividadUcii } from '../../components/actividad/ucii.vue'
export { default as ChartsBar } from '../../components/charts/bar.js'
export { default as ChartsLine } from '../../components/charts/line.js'
export { default as ExternoBox } from '../../components/externo/box.vue'
export { default as ExternoExpo } from '../../components/externo/expo.vue'
export { default as ExternoIce } from '../../components/externo/ice.vue'
export { default as ExternoImpo } from '../../components/externo/impo.vue'
export { default as ExternoSaldo } from '../../components/externo/saldo.vue'
export { default as PreciosBox } from '../../components/precios/box.vue'
export { default as PreciosEmp } from '../../components/precios/emp.vue'
export { default as PreciosIpc } from '../../components/precios/ipc.vue'
export { default as PreciosRem } from '../../components/precios/rem.vue'
export { default as PreciosSal } from '../../components/precios/sal.vue'
export { default as MonetariaBcra } from '../../components/monetaria/bcra.vue'
export { default as MonetariaBox } from '../../components/monetaria/box.vue'
export { default as MonetariaCambio } from '../../components/monetaria/cambio.vue'
export { default as MonetariaMae } from '../../components/monetaria/mae.vue'
export { default as MonetariaRofex } from '../../components/monetaria/rofex.vue'
export { default as MonetariaTasa } from '../../components/monetaria/tasa.vue'
export { default as MonetariaTcrm } from '../../components/monetaria/tcrm.vue'

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
