<template>
  <div>
 
     <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
 
export default {
  name: "Details",
  async asyncData({ params }) {
    const rekpi = require(`~/static/confluence/${params.kpi}.json`)

    const savedCells = {
      1416: {
        area: "1 / 1 / 4 / 6",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
      },
       1267: {
        area: "1 / 6 / 2 / 7",
        kpi: params.kpi,
        type: "KpiUpdated",
        hasChart: true,
        title: rekpi.t,
        subtitle: "Último Dato"      
      },      
      2367: {
        area: "2 / 6 / 4 / 7",
        kpi: params.kpi,
        type: "Heatmap",
        hasChart: true,
        title: rekpi.t,
        subtitle: "Variación"
      },

      4715: {
        area: "4 / 1 / 7 / 5",
        kpi: params.kpi,
        type: "Box",
        hasChart: true,
        title: rekpi.t,
        subtitle: "Descripción metodológica",
      },
      4757: {
        area: "4 / 5 / 7 / 7",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
        title: rekpi.t,
        subtitle:  'Últimos 24 meses'
      },
/*     "1215": {
        "area": "1 / 1 / 2 / 5",
        "kpi": params.kpi,
        "type": "PostHeader",
        "hasChart": true
    },
    "1256": {
        "area": "1 / 5 / 2 / 6",
        "kpi": params.kpi,
        "type": "KpiUpdated",
        "hasChart": true
    },
    "1267": {
        "area": "1 / 6 / 2 / 7",
        "kpi": params.kpi,
        "type": "KpiMensual",
        "hasChart": true
    },
    "2515": {
        "area": "2 / 1 / 5 / 5",
        "kpi": params.kpi,
        "type": "Line",
        "hasChart": true,
        title: "Serie de tiempo",
        subtitle: 'Frecuencia mensual. Base 2004'        
    },
    "2557": {
        "area": "2 / 5 / 5 / 7",
        "kpi": params.kpi,
        "type": "Table",
        "hasChart": true,
        title: "Valores y tendencias",
        subtitle:  'Últimos 24 meses'        
    }
       */
    };

    return { savedCells };
  },
  data() {
    return {
      kpi: require(`~/static/confluence/${this.$route.params.kpi}.json`)

    }
  },
  created() {    
   if (this.kpi.cells) {
      this.savedCells = this.kpi.cells
   }
  }
};
</script>

<style lang="scss">
</style>

 