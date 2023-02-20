<template>
   
  <section class="lastup">
       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
    </h2>
     
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
   margin: 0;
  margin-bottom: 10px;
  text-align: center;
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

.scorecard {
   p {
    margin-bottom: 10px;
  }
}

hr {
      width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 15px 0;
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
 

 
 

 
 
  
 </style>