<template>
  <div>
    <div class="new-header">
      <h2>
          <strong>{{ kpi.t }}</strong>. {{kpi.st}}
      </h2>

      <div class="toolbar">
<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M280 776h400v-60H280v60Zm197-126 158-157-42-42-85 84V336h-60v199l-85-84-42 42 156 157Zm3 326q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm56-97h489L578 583 446 754l-93-127-117 152Zm-56 97V276v600Z"/></svg>        
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M727 976q-47.5 0-80.75-33.346Q613 909.307 613 861.669q0-6.669 1.5-16.312T619 828L316 652q-15 17-37 27.5T234 690q-47.5 0-80.75-33.25T120 576q0-47.5 33.25-80.75T234 462q23 0 44 9t38 26l303-174q-3-7.071-4.5-15.911Q613 298.25 613 290q0-47.5 33.25-80.75T727 176q47.5 0 80.75 33.25T841 290q0 47.5-33.25 80.75T727 404q-23.354 0-44.677-7.5T646 372L343 540q2 8 3.5 18.5t1.5 17.741q0 7.242-1.5 15Q345 599 343 607l303 172q15-14 35-22.5t46-8.5q47.5 0 80.75 33.25T841 862q0 47.5-33.25 80.75T727 976Zm.035-632Q750 344 765.5 328.465q15.5-15.535 15.5-38.5T765.465 251.5q-15.535-15.5-38.5-15.5T688.5 251.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm-493 286Q257 630 272.5 614.465q15.5-15.535 15.5-38.5T272.465 537.5q-15.535-15.5-38.5-15.5T195.5 537.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5Zm493 286Q750 916 765.5 900.465q15.5-15.535 15.5-38.5T765.465 823.5q-15.535-15.5-38.5-15.5T688.5 823.535q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5ZM727 290ZM234 576Zm493 286Z"/></svg>
      </div>
    </div>

    
    <hr>
     <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
   

export default {
  name: "Details",
  async asyncData({ params }) {
    const rekpi = require(`~/static/data/${params.kpi}.json`)

    const savedCells = {

 
       chart: {
        area: "1 / 1 / 5 / 7",
        kpi: params.kpi,
        type: "newLine",
        //type: "Line",
        hasChart: true,
        subtitle: "Serie de Tiempo",
        title: rekpi.t        
      },
        first: {
        area: "1 / 7 / 5 / 9",
        kpi: params.kpi,
        type: "LineSidebar",
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
                 
 
         random: {
        area: "5 / 7 / 9 / 1",
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

.new-header {
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  > * { flex: 1; }
  + hr {
    border-color: #666;
    border-top: 0;
    margin: 15px 0 20px;
  }  
  h2 {
    color: #eee;
    font-size: 22px;
    strong {
      color: #eee;
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

 