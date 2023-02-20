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
        type: "newLine",
        //type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
        first: {
        area: "10 / 5 / 6 / 7",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
                          
 
                 
 
         random: {
        area: "10 / 5 / 6 / 1",
        kpi: params.kpi,
        type: "Comment",
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

 