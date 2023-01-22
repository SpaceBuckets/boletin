<template>
  <div>
 
     <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
   

export default {
  name: "Details",
  async asyncData({ params }) {
    const rekpi = require(`~/static/data/${params.kpi}.json`)

    const savedCells = {
      header: {
        area: "1 / 1 / 2 / 7",
        kpi: params.kpi,
        type: "LineHeader",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
 
       chart: {
        area: "2 / 1 / 6 / 7",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
        first: {
        area: "8 / 3 / 6 / 1",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
                          
 
         second: {
        area: "8 / 3 / 6 / 5",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
                 
 
         random: {
        area: "8 / 5 / 6 / 7",
        kpi: params.kpi,
        type: "Box",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
                 
       
    };

    return { savedCells };
  },
  data() {
    return {
      kpi: require(`~/static/data/${this.$route.params.kpi}.json`)

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

 