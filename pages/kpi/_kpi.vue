<template>
  <div>
        <div class="dashtitle">
      <h2>{{chart.t}}. <span>{{chart.st}}</span></h2>
      <div style="display:flex;">
       <div >
       <button>Share</button>

       </div>

      </div>

    </div>
     <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
 
export default {
  name: "Details",
  async asyncData({ params }) {
    const savedCells = {
      1267: {
        area: "1 / 6 / 2 / 7",
        kpi: params.kpi,
        type: "KpiUpdated",
        hasChart: true,
      },
      1416: {
        area: "1 / 1 / 4 / 6",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
        title: "Serie de tiempo",
        subtitle: 'Frecuencia mensual. Base 2004'
      },
      2367: {
        area: "2 / 6 / 3 / 7",
        kpi: params.kpi,
        type: "KpiMensual",
        hasChart: true,
      },
      3467: {
        area: "3 / 6 / 4 / 7",
        kpi: params.kpi,
        type: "KpiAnual",
        hasChart: true,
      },
      4715: {
        area: "4 / 1 / 7 / 5",
        kpi: params.kpi,
        type: "Box",
        hasChart: true,
        title: "Descripción metodológica",
        subtitle: 'Fuente INDEC'
      },
      4757: {
        area: "4 / 5 / 7 / 7",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
        title: "Valores y tendencias",
        subtitle: 'Últimos 24 meses'
      },
    };

    return { savedCells };
  },
  data() {
    return {
      chart: require(`~/json/confluence/${this.$route.params.kpi}.json`)

    }
  }
};
</script>

<style lang="scss">
</style>

 