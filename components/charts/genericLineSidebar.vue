<template>
   
  <section class="lastup">
       <div>
    <div class="scorecard">
      <div style="align-items:baseline">
 <div style="justify-content:center;padding-top:0"><div style="color:#676c6f;padding-top:0">Último Dato</div></div>
 
      <h2 class="mainpdate"> {{ processedDate() }}</h2>
      </div>
             
     <div class="sliceheatmap">
      <div v-for="slice in 12" v-if="kpi.frec === 'Mensual'" :style="{background: getVariationHeatmap(slice)}">

      </div>
     </div>
    </div>
      </div>
    <div>


      <div class="scorecard highlight">
        <div class="single-legend" v-for="(kpi,parent) in kpi.dimensions" :key="`${kpi.label}`">
          <div><span class="circle" :style="{background: kpi.color }"></span> {{kpi.label}}</div> 
          <div>
            <div>{{kpi.sym}}{{kpi.data[kpi.data.length-1].y.toFixed(2)}}{{kpi.unit}}</div>   
            <div class="deltacontainer" :class="{ negative: getVariation(kpi) < 0 }">
              <i v-if="getVariation(kpi) > 0">▲</i>
              <i v-if="getVariation(kpi) < 0">▼</i>
              <span class="delta">{{getVariation(kpi).replace('-','')}}%</span>
            </div>   
          </div>

        </div>
     </div> 
</div>
 
    <div v-if="metadata !== false">
    <div>
      <h4>Metadata</h4>
    </div>

    <div class="scorecard">
     <div>
        <div>Último Dato:</div>
        <div>{{ kpi.dimensions[0].data[kpi.dimensions[0].data.length-1].x }}</div>
      </div>  
      <div>
        <div>Frecuencia:</div>
        <div>{{kpi.frec}}</div>
      </div>
      <div>
        <div>Fuente:</div>
        <div><a target="_blank" :href="kpi.fur">{{kpi.fu}}</a></div>
      </div>
      <div>
        <div>Método:</div>
        <div><a target="_blank" :href="kpi.fdr">{{kpi.fd}}</a></div>
      </div>
      <div>
        <div>Descargar:</div>
        <div><a :href="kpi.data">CSV</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a :href="kpi.data">JSON</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a :href="kpi.data">XLS</a></div>
      </div>

    </div>  
    </div>


   
  </section>

</template>

<script>
   
export default {
  props: ['title', 'subtitle', 'data','index','metadata'],  
  data() {
    return {
      kpi: require(`~/static/data/${this.data}.json`),
      minVal: 0,
      maxVal: 0,
      startingVal: 0,
      updated: 0,
    };
  }, 
    mounted() {
    },
    methods: {
getVariationHeatmap(slice) {
  const currDate = this.kpi.dimensions[0].data.slice(-1)[0].x;
  const monthNumber = new Date(currDate).getUTCMonth() + 1;

  if (slice > monthNumber) return;

  const data = this.kpi.dimensions[0].data;
  const A = data[data.length - 1 - slice]?.y;
  const B = data[data.length - slice]?.y;

  return (A && B) ? ((A - B) / A) * 100 > 0 ? '#b22222' : '#009966' : null;
},
      processedDate() {
        var pepe = new Date(this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x).toLocaleDateString('es', {day: 'numeric', month: 'long', year: 'numeric' }).replaceAll("de",'')

        if(this.kpi.frec === 'Mensual') {
          const lastDate = new Date(this.kpi.dimensions[0].data.slice(-1)[0].x + "T00:00:00");

          //lastDate.setMonth(lastDate.getUTCMonth());
          var pepe = lastDate.toLocaleString('es', {month: 'long', year: 'numeric' }).replaceAll("de",'');

        } 
        if(this.kpi.frec === 'Anual') {
          var pepe = `Año ${new Date(this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x).toLocaleDateString('es', {year: 'numeric' }).replaceAll("de",'')}`
        }         
        return pepe
      },
      getLastValue() {
        var lastValue = this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].y.toFixed(2);
        return lastValue
      },
    getVariation(legend) {
      var A = legend.data[legend.data.length-1].y;
      var B = legend.data[legend.data.length-2].y;
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
    getLastUpdated() {
      const formatter = new Intl.DateTimeFormat("es", {month: "long", year: "numeric",});
      var date = new Date(this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x)
      var day = 60 * 60 * 24 * 1000;
      date = date.setDate(date.getDate() + 1)
      const lastupdate = formatter.format(date);
      var day = this.kpi.dimensions[0].data[this.kpi.dimensions[0].data.length-1].x.split('-')

       if (day[2] === "01" || day[2] === "02") {
       return lastupdate.replace("de","").replace(" ","");
      }
      else {
       return day + " " + lastupdate.replace("de","").replace(" ","");
      } 
    },
  },  
};
</script>

 <style lang="scss" scoped>
 .mainpdate {
  text-align:center;
  margin-bottom: 0px;
  margin-top: 0px;
  text-transform: capitalize;
 }
 h4 {
  font-size: 14px;
   margin: 0;
   font-weight: normal;
  margin-bottom: 10px;
  //text-align: center;
  text-transform: capitalize;
 }
h5 {
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;

   color: #009966;
    svg { 
      fill: #009966; 
       }
  &.negative {
    color: #b22222;
    svg { 
      fill: #b22222; 
      transform: rotate(180deg)
      }

  }
}
.deltacontainer {
  align-items: center;
  gap: 2px;
 * {
    color: #009966;

 }
  i {
    font-style: normal;
    font-size: 8px;
  }
 
    &.negative * {
      color: #b22222;
    }  
}

.scorecard {
   margin-bottom: 10px;
    > div {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    &:last-child { border-bottom: 0; }
    > div { 
      flex: 1; 
      color: #676c6f;
      max-width: max-content;
      display: flex;
      align-items: center;
      font-size: 14px;
      > div { 
        display: flex;
        margin-right: 10px;
        &:last-of-type { margin-right: 0; }
      }
      svg {
        fill: #888;
        width: 18px;
        height: auto;
      }
    }
  }
}

hr {
      width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 10px 0 15px;
}

h2 {
  border: 0;
    padding-bottom: 0 !important;
  margin-top: 0;
  margin-bottom: 10px;
 font-size: 16px;
 font-weight: normal;
 strong {
  font-weight: bold;
 }
}

 
.lastup { 
  float: left;
  width: 100%;
  height:100%;
  max-width: 300px;
  overflow: hidden;
  padding-left: 0px;
  border-left: 1px solid #eee;
    @media only screen and (max-width: 980px) {
    width: calc(100% - 0px);
    max-width: 100%;
    border: 0;
    padding-right: 5px;
    margin-top: 10px;
    }   
 > div {
     margin-left: 15px;
     border-radius: 2px;
     max-height: 40%;
     overflow: auto;
    margin-bottom: 20px;
      border-bottom: 1px solid #eee;
        @media only screen and (max-width: 980px) {
    margin-left: 0;
  }
      &:first-child {
        margin-bottom: 10px;
        padding-bottom: 5px;
        div {
          padding-top: 2px;
        }
      }
    &:last-child {
      border: 0;
    }
  }
}
h5 + p {
  margin: 0;  text-align: center;

}
 

 
 

 
 
.scorecard {
 
  .single-legend {

    div { color: #676c6f; }
    .circle {
      display: inline-block;
      vertical-align: middle;
      min-width: 12px;
      min-height: 12px;
      background:#0074D9;
      border-radius: 50px;
      margin-right: 6px;
    }    
  }

}


.sliceheatmap {
  height: 8px;
  display: flex;
  border: 0px solid #eee !important;
  padding: 0 !important;
  border-radius: 6px;
  overflow: hidden;
  background: #ddd;
  gap: 0.5px;
  > * {
    flex: 1;
    //border-right: 1px solid #eee;
    opacity:0.8;
    max-width: 100% !important;
    &:last-child {
      border-right: 0;
    }
  }
}

 </style>