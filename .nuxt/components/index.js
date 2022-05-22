export { default as ChartsBar } from '../../components/charts/bar.js'
export { default as ChartsLine } from '../../components/charts/line.js'
export { default as ActividadBox } from '../../components/actividad/box.vue'
export { default as ActividadEmae } from '../../components/actividad/emae.vue'
export { default as ActividadIpi } from '../../components/actividad/ipi.vue'
export { default as ActividadIsac } from '../../components/actividad/isac.vue'
export { default as ActividadUcii } from '../../components/actividad/ucii.vue'
export { default as DolarBox } from '../../components/dolar/box.vue'
export { default as DolarBrecha } from '../../components/dolar/brecha.vue'
export { default as DolarCambio } from '../../components/dolar/cambio.vue'
export { default as DolarRofex } from '../../components/dolar/rofex.vue'
export { default as DolarTcrm } from '../../components/dolar/tcrm.vue'
export { default as CuentasBalanza } from '../../components/cuentas/balanza.vue'
export { default as CuentasBox } from '../../components/cuentas/box.vue'
export { default as CuentasDeficit } from '../../components/cuentas/deficit.vue'
export { default as CuentasSubsidios } from '../../components/cuentas/subsidios.vue'
export { default as ExternoExpo } from '../../components/externo/expo.vue'
export { default as ExternoImpo } from '../../components/externo/impo.vue'
export { default as MonetariaBox } from '../../components/monetaria/box.vue'
export { default as MonetariaComprasanual } from '../../components/monetaria/comprasanual.vue'
export { default as MonetariaComprasbcra } from '../../components/monetaria/comprasbcra.vue'
export { default as MonetariaComprasmensual } from '../../components/monetaria/comprasmensual.vue'
export { default as MonetariaEmbi } from '../../components/monetaria/embi.vue'
export { default as MonetariaIce } from '../../components/monetaria/ice.vue'
export { default as MonetariaMae } from '../../components/monetaria/mae.vue'
export { default as MonetariaReservas } from '../../components/monetaria/reservas.vue'
export { default as MonetariaTasa } from '../../components/monetaria/tasa.vue'
export { default as ProduccionAcero } from '../../components/produccion/acero.vue'
export { default as ProduccionAutos } from '../../components/produccion/autos.vue'
export { default as ProduccionBox } from '../../components/produccion/box.vue'
export { default as ProduccionCereales } from '../../components/produccion/cereales.vue'
export { default as ProduccionGas } from '../../components/produccion/gas.vue'
export { default as ProduccionPetroleo } from '../../components/produccion/petroleo.vue'
export { default as PreciosAsalariados } from '../../components/precios/asalariados.vue'
export { default as PreciosBox } from '../../components/precios/box.vue'
export { default as PreciosDesempleo } from '../../components/precios/desempleo.vue'
export { default as PreciosIpc } from '../../components/precios/ipc.vue'
export { default as PreciosIpchistorico2 } from '../../components/precios/ipchistorico2.vue'
export { default as PreciosRem } from '../../components/precios/rem.vue'

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
