export { default as Asalariados } from '../../components/asalariados.vue'
export { default as Brecha } from '../../components/brecha.vue'
export { default as Cambio } from '../../components/cambio.vue'
export { default as Comprasbcra } from '../../components/comprasbcra.vue'
export { default as Desempleo } from '../../components/desempleo.vue'
export { default as Emae } from '../../components/emae.vue'
export { default as Embi } from '../../components/embi.vue'
export { default as Ice } from '../../components/ice.vue'
export { default as Intercambio } from '../../components/intercambio.vue'
export { default as Ipc } from '../../components/ipc.vue'
export { default as Ipi } from '../../components/ipi.vue'
export { default as Isac } from '../../components/isac.vue'
export { default as Mae } from '../../components/mae.vue'
export { default as Rem } from '../../components/rem.vue'
export { default as Reservas } from '../../components/reservas.vue'
export { default as Tasa } from '../../components/tasa.vue'
export { default as Tcrm } from '../../components/tcrm.vue'
export { default as Ucii } from '../../components/ucii.vue'
export { default as ActividadBox } from '../../components/actividad/box.vue'
export { default as ChartsBar } from '../../components/charts/bar.js'
export { default as ChartsLine } from '../../components/charts/line.js'
export { default as ExternoBox } from '../../components/externo/box.vue'
export { default as ExternoExpo } from '../../components/externo/expo.vue'
export { default as ExternoImpo } from '../../components/externo/impo.vue'
export { default as PreciosBox } from '../../components/precios/box.vue'
export { default as PreciosIpc } from '../../components/precios/ipc.vue'
export { default as PreciosIpchistorico2 } from '../../components/precios/ipchistorico2.vue'
export { default as MonetariaBox } from '../../components/monetaria/box.vue'
export { default as MonetariaComprasanual } from '../../components/monetaria/comprasanual.vue'
export { default as MonetariaComprasmensual } from '../../components/monetaria/comprasmensual.vue'
export { default as MonetariaRofex } from '../../components/monetaria/rofex.vue'

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
