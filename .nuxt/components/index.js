export { default as ChartsGenericBox } from '../../components/charts/genericBox.vue'
export { default as ChartsGenericComment } from '../../components/charts/genericComment.vue'
export { default as ChartsGenericHeader } from '../../components/charts/genericHeader.vue'
export { default as ChartsGenericHeatmap } from '../../components/charts/genericHeatmap.vue'
export { default as ChartsGenericHeatmapBox } from '../../components/charts/genericHeatmapBox.vue'
export { default as ChartsGenericKpi } from '../../components/charts/genericKpi.vue'
export { default as ChartsGenericKpiAnual } from '../../components/charts/genericKpiAnual.vue'
export { default as ChartsGenericKpiMensual } from '../../components/charts/genericKpiMensual.vue'
export { default as ChartsGenericKpiUpdated } from '../../components/charts/genericKpiUpdated.vue'
export { default as ChartsGenericKpiUpdatedBox } from '../../components/charts/genericKpiUpdatedBox.vue'
export { default as ChartsGenericKpiUpdatedPepe } from '../../components/charts/genericKpiUpdatedPepe.vue'
export { default as ChartsGenericLine } from '../../components/charts/genericLine.vue'
export { default as ChartsGenericLineHeader } from '../../components/charts/genericLineHeader.vue'
export { default as ChartsGenericLineMaster } from '../../components/charts/genericLineMaster.vue'
export { default as ChartsGenericLineResult } from '../../components/charts/genericLineResult.vue'
export { default as ChartsGenericLineSidebar } from '../../components/charts/genericLineSidebar.vue'
export { default as ChartsGenericPostHeader } from '../../components/charts/genericPostHeader.vue'
export { default as ChartsGenericSol } from '../../components/charts/genericSol.vue'
export { default as ChartsGenericSparkLine } from '../../components/charts/genericSparkLine.vue'
export { default as ChartsGenericTable } from '../../components/charts/genericTable.vue'
export { default as ChartsKpiBoard } from '../../components/charts/kpiBoard.vue'
export { default as ChartsKpinav } from '../../components/charts/kpinav.vue'

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
