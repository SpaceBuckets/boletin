export { default as CuentasNacionalesBalanza } from '../../components/cuentas-nacionales/balanza.vue'
export { default as CuentasNacionalesDeficit } from '../../components/cuentas-nacionales/deficit.vue'
export { default as CuentasNacionalesExpo } from '../../components/cuentas-nacionales/expo.vue'
export { default as CuentasNacionalesImpo } from '../../components/cuentas-nacionales/impo.vue'
export { default as CuentasNacionalesSubsidios } from '../../components/cuentas-nacionales/subsidios.vue'
export { default as ChartsBar } from '../../components/charts/bar.js'
export { default as ChartsKpinav } from '../../components/charts/kpinav.vue'
export { default as ChartsLine } from '../../components/charts/line.js'
export { default as ActividadEconomicaAcero } from '../../components/actividad-economica/acero.vue'
export { default as ActividadEconomicaCereales } from '../../components/actividad-economica/cereales.vue'
export { default as ActividadEconomicaEmae } from '../../components/actividad-economica/emae.vue'
export { default as ActividadEconomicaGas } from '../../components/actividad-economica/gas.vue'
export { default as ActividadEconomicaIpi } from '../../components/actividad-economica/ipi.vue'
export { default as ActividadEconomicaIsac } from '../../components/actividad-economica/isac.vue'
export { default as ActividadEconomicaPetroleo } from '../../components/actividad-economica/petroleo.vue'
export { default as ActividadEconomicaUcii } from '../../components/actividad-economica/ucii.vue'
export { default as PoliticaMonetariaBrecha } from '../../components/politica-monetaria/brecha.vue'
export { default as PoliticaMonetariaCambio } from '../../components/politica-monetaria/cambio.vue'
export { default as PoliticaMonetariaComprasbcra } from '../../components/politica-monetaria/comprasbcra.vue'
export { default as PoliticaMonetariaEmbi } from '../../components/politica-monetaria/embi.vue'
export { default as PoliticaMonetariaIce } from '../../components/politica-monetaria/ice.vue'
export { default as PoliticaMonetariaReservas } from '../../components/politica-monetaria/reservas.vue'
export { default as PoliticaMonetariaTasa } from '../../components/politica-monetaria/tasa.vue'
export { default as PoliticaMonetariaTcrm } from '../../components/politica-monetaria/tcrm.vue'
export { default as PreciosSalariosAsalariados } from '../../components/precios-salarios/asalariados.vue'
export { default as PreciosSalariosDesempleo } from '../../components/precios-salarios/desempleo.vue'
export { default as PreciosSalariosIpc } from '../../components/precios-salarios/ipc.vue'

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
