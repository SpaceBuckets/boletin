<template>
  <div>
 
     <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
   const generatedTime = require(`~/static/generatedTime.json`)

export default {
  name: "Details",
  async asyncData({ params }) {
    const rekpi = require(`~/static/data/${generatedTime}/${params.kpi}/${params.kpi}.json`)

    const savedCells = {
      1246: {
        area: "1 / 1 / 4 / 7",
        kpi: params.kpi,
        type: "LineHeader",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
 
 
 
                          
        2367: {
        area: "4 / 5 / 8 / 7",
        kpi: params.kpi,
        type: "Heatmap",
        hasChart: true,
        title: rekpi.t,
        subtitle: "Variación"
      },  

      4757: {
        area: "4 / 1 / 8 / 5",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
        title: rekpi.t,
        subtitle:  'Últimos 24 meses'
      },
 
 
 
       
    };

    return { savedCells };
  },
  data() {
    return {
      kpi: require(`~/static/data/${generatedTime}/${this.$route.params.kpi}/${this.$route.params.kpi}.json`)

    }
  },
  created() {    
    console.log()
   if (this.kpi.cells) {
      this.savedCells = this.kpi.cells
   }
  }
};
</script>

<style lang="scss">
</style>

 