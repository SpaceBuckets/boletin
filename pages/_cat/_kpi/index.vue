<template>
  <div>
    <div class="new-header">
      <h1>
          <strong>{{ kpi.t }}</strong>. {{kpi.st}}
      </h1>
          <p v-html="kpi.sd"></p>
      <hr>
      <br>

    </div>

    
      <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
   

export default {
  name: "Details",
  async asyncData({ params }) {
    const rekpi = require(`~/static/data/${params.kpi}.json`)

    const savedCells = {
/*          first: {
        area: "1 / 1 / 2 / 9",
        kpi: params.kpi,
        type: "Header",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      }, 
  */
       chart: {
        area: "1 / 1 / 5 / 9",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },

                          

                 
 
         random: {
        area: "5 / 7 / 9 / 1",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
                        fireet: {
        area: "5 / 7 / 9 / 9",
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

.new-header {
   //display: none;
  @media only screen and (max-width: 980px) {
    padding: 15px;
    br { display: none; }
  }
  > * { flex: 1; }
  + hr {
    border-color: #666;
    border-top: 0;
    margin: 15px 0 20px;
  }  
  p {
    color: #D3D3D3;
    margin-bottom: 15px;
  }
    strong {
      color: #D3D3D3 !important;
    }  
  h1 {
    color: #D3D3D3;
    font-size: 24px;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 10px;

  }
  .toolbar {
    max-width: max-content;
    display: flex;
    gap: 15px;
    svg {
      width: 24px;
      height: auto;
      fill: #888;
      stroke: #888;
    }
  }
}
</style>

 