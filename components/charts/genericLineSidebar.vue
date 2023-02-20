<template>
   
  <section class="lastup">
    <div>
      <h4>Metadata</h4>
    </div>
<!--     <div>
      <h4>{{getLastUpdated()}}</h4>
      <h5 :class="{ negative: getVariation(0) < 0 }">{{getLastValue()}}
        <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> {{getVariation(0)}}%
      </h5> 
    </div>
    <hr> -->
 

 
    <div class="scorecard">
      <div>
        <div>Actualizado:</div>
        <div>{{ kpi.chart.dates[kpi.chart.dates.length-1].x }}</div>
      </div>
      <div>
        <div>Frecuencia:</div>
        <div> {{kpi.frec}}</div>
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
        <div>Datos:</div>
        <div><a style="opacity:0.5;pointer-events:none" :href="kpi.data">Descargar</a></div>
      </div>

    </div>  

    <div>
      <h4>Dimensiones</h4>
    </div>
      <div class="scorecard">
        <div class="single-legend" v-for="(kpi,parent) in kpi.chart.dimensions" :key="`${kpi.label}`">
          <div><span class="circle" :style="{background: kpi.color }"></span> {{kpi.label}}</div> 
          <div>
            <div>{{kpi.data[kpi.data.length-1].y}}</div>   
            <div><span class="delta" :class="{ negative: getVariation(kpi) < 0 }">{{getVariation(kpi)}}</span></div>   
          </div>

        </div>
     </div>    
  </section>

</template>

<script>
   
export default {
  props: {  
    altTitle: {
      type: String,
      required: false
    },       
    edit: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },    
    data: {
      type: String,
      required: false,
    },
    chartHeight: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      kpi: require(`~/static/data/${this.data}.json`),
      minVal: 0,
      maxVal: 0,
      startingVal: 0,
      updated: 0,
    };
  }, 
    methods: {
      getLastValue() {
        var lastValue = this.kpi.chart.dimensions[0].data[this.kpi.chart.dimensions[0].data.length-1].y;
        return lastValue
      },
    getVariation(legend) {
      var A = legend.data[legend.data.length-1].y;
      var B = legend.data[legend.data.length-2].y;
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
    getLastUpdated() {
      const formatter = new Intl.DateTimeFormat("es", {month: "long", year: "numeric",});
 
      var date = new Date(this.kpi.chart.dates[this.kpi.chart.dates.length-1].x)
      var day = 60 * 60 * 24 * 1000;
      date = date.setDate(date.getDate() + 1)
      const lastupdate = formatter.format(date);
      var day = this.kpi.chart.dates[this.kpi.chart.dates.length-1].x.split('-')

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
 h4 {
  font-size: 18px;
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

.delta {
     color: #009966;
&.negative {
      color: #b22222;
}
}


.scorecard {
   margin-bottom: 15px;
    > div {
display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #eee;
    padding: 6px 1px;
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
 font-size: 20px;
 font-weight: normal;
 strong {
  font-weight: bold;
 }
}

 
.lastup { 
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
   > * {
    flex: 1;
 
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
      width: 12px;
      height: 12px;
      background:#0074D9;
      border-radius: 50px;
      margin-right: 6px;
    }    
  }

}
  
 </style>