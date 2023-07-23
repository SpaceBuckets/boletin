<template>
  <div>
    <div class="new-header">
      <h1>
          <strong>{{ kpi.t }}</strong>. {{kpi.st}}
      </h1>
          <p v-html="kpi.sd"></p>
 
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
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 10px;   
  @media only screen and (max-width: 980px) {
    padding: 15px;
    border-radius: 0;
    br { display: none; }
  }
  > * { flex: 1; }
  + hr {
    border-color: #333;
    border-top: 0;
    margin: 15px 0 20px;
  }  
  p {
    color: #333;
    margin-bottom: 0;
        strong {
      color: #333 !important;
    }  
  }

  h1 {
    color: #333;
    font-size: 22px;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 10px;
    @media only screen and (max-width: 980px) {
      font-size: 20px;
    }
    strong {
      color: #333 !important;
    }  
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

 