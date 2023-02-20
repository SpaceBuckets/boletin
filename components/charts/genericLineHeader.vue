<template>
   
  <section class="lastup">
    <div>
      <h2><strong>{{ kpi.t }}</strong>. {{kpi.st}}</h2>
      <p v-html="kpi.d"></p>
    </div>
    
    <div>
      <h4>{{getLastUpdated()}}</h4>
      <h5 :class="{ negative: getVariation(0) < 0 }">{{getLastValue()}}
        <svg viewBox="0 0 100 100" class="triangle" style="width: 0.6875em; height: 0.6875em;"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> {{getVariation(0)}}%
      </h5> 
      <p style="text-align:center;margin-top:5px;margin-bottom:0">Frecuencia: {{kpi.frec}}</p>
    </div>

    <div class="scorecard">
      <p>Fuente: <a target="_blank" :href="kpi.fur">{{kpi.fu}}</a></p>
      <p>Método: <a target="_blank" :href="kpi.fdr">{{kpi.fd}}</a></p>
      <p style="margin-bottom:0">Datos: <a style="opacity:0.5;pointer-events:none" :href="kpi.data">Descargar <svg style="width:16px;height:auto;margin-right:6px;position:relative;top:2px;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='#aaa' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'> <polyline fill="none" points="10,75 10,90 90,90 90,75"/> <line x1="50" y1="15" x2="50" y2="65" /> <polyline fill="none" points="30,50 50,65 70,50" /></svg></a></p>
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
    getVariation(i) {
      var A = this.kpi.chart.dimensions[0].data[this.kpi.chart.dimensions[0].data.length-1].y;
      var B = this.kpi.chart.dimensions[0].data[this.kpi.chart.dimensions[0].data.length-2].y;
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
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  text-transform: capitalize;
 }
h5 {
  font-size: 18px;
  margin: 0;
  margin-top: 5px;
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

.masterflex {
  display: flex; 
  flex-direction: column-reverse;
  grid-template-columns: 1fr 240px; 
  height: 100%;
   //gap: 20px;
  //max-height: 500px;
  user-select: none;
  h2 + div div{
    height: 100%;
  }
}
.charte { 
  grid-area: 1 / 1 / 3 / 2; 
  position:relative;    
  //padding: 15px 15px 10px;
  display: block;
  }
.lastup { 
  grid-area: 1 / 2 / 3 / 3; 
  //background: #f5f5f5;
  //padding: 20px 20px 5px;
  display: flex;
  //border-bottom: 2px solid #eee; 
  max-height: 115px;
  overflow: hidden;
  gap: 40px;
  > * {
    flex: 1;
    max-width: 210px;
    &:first-child {
      flex: 2;
      max-width: 100%;
    }
  }
}
h2 + p {
  margin: 0;
  max-width: 700px;
}
 

select#fecha {
      margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 2px;
 }

 .chartcontain {
   position: absolute;top: 80px;bottom: 15px;left: 15px;right:15px;
   > * {
         position: absolute;top: 0;bottom: 0;left: 0;right:0;

   }
       @media only screen and (max-width: 980px) {
  position: relative;
  top: initial;
  left: initial;
  right: initial;
  bottom: initial;
> * {
  position: relative;
}
    }  
 }

 .rangeselector {
  position: absolute;
  top: 24px;
  right: 20px;
  z-index:9999;
  transform: rotate(180deg);
display: flex;
    align-items: center;
    //display: none;
           @media only screen and (max-width: 980px) {
           display: none;
           }
     > * {
      flex: 1;
          display: inline-flex;

    }
    input {
      margin: 0 10px;
      //transform: rotate(180deg);
    }
  span {
      transform: rotate(180deg);
    color: #888;
        font-family: Helvetica, Arial, sans-serif;
    font-weight: lighter;
    font-size: 14px;
  }
 }

.updatedPill {
  position: absolute;
  top: 22px;
  right: 20px;
  border-radius: 100px;
   color: #aaa;
   text-transform: capitalize;
  font-size: 14px;
}
 

 .reloader {
  position: absolute;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events:none;
 }

 h6 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  padding-left: 6px;
  //position: absolute;
  //left: 20px;
 }

 .repepe {
  height: 100%;
  > div {
    height: 100%;
  }
 }
 </style>