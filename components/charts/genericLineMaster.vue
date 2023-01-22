<template>
<div class="mastergrid">
  <section class="charte chart">
  
   
    <div class="rangeselector">
      <span>{{ maxVal }}</span>
      <input ref="magicRange" @change="triggerRange($event)" type="range" step="1" :min="-maxVal" :max="-minVal">
      <span>{{ minVal }}</span>

    </div>

       <h2 v-if="!title">
        <strong>{{ chart.t }}</strong>. {{chart.st}}
      </h2>
    <h2 v-if="title">
        <strong>{{ title }}</strong>. {{subtitle}}
    </h2>
    <div class="updatedPill" v-if="$route.path === '/'">{{ getLastUpdated()}}</div>
    <div class="">
    <charts-line
      :chart="chart"
      :key="updated"
    />
    </div>

  </section>
  <section class="lastup">
    <charts-genericKpiUpdatedPepe :data="data"/>
  </section>
 
</div>

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
      chart: require(`~/static/data/${this.data}.json`),
      minVal: 0,
      maxVal: 0,
      startingVal: 0,
      updated: 0,
    };
  },
  created() {
 
    let modifiedArr = this.chart.chartdata.labels.map(function (element) {
      return element.slice(0, -6);
    });

    const obj = {};
    for (let i = 0; i < modifiedArr.length; i++) {
      obj[modifiedArr[i]] = [];
    }

    var keys = Object.keys(obj).map(i=>Number(i));


    this.maxVal = Math.max.apply(Math, keys)
    this.minVal = Math.min.apply(Math, keys)
   

  },
  mounted() {
    if(this.$state.kpidates[this.data]) {
          this.$refs.magicRange.value = -this.$state.kpidates[this.data].slice(0, -6)

    } else {
         this.$state.kpidates[this.data] = `${this.minVal}-01-01`
          this.$refs.magicRange.value = -this.$state.kpidates[this.data].slice(0, -6)

    }

  },
  methods: {
 
 getLastUpdated() {
      const formatter = new Intl.DateTimeFormat("es", {
         month: "long",
        year: "numeric",
      });

     var date = new Date(this.chart.chartdata.labels.slice(-1)[0])
     var day = 60 * 60 * 24 * 1000;

      date = date.setDate(date.getDate() + 1)


      const lastupdate = formatter.format(
date
      );
      var day = this.chart.chartdata.labels.slice(-1)[0].slice(-2)
      if (day === "01") {
       return lastupdate.replace("de","").replace(" ","");

      }
            else {
       return day + " " + lastupdate.replace("de","").replace(" ","");

      }
    },    
    triggerRange(e) {
      var valpepe = e.target.value * -1
      this.startingVal = e.target.value
      this.$state.kpidates[this.data] = `${valpepe}-01-01`
      this.updated++
    }
  }
};
</script>

 <style lang="scss" scoped>
 
h2 {
  border: 0;
    padding-bottom: 25px !important;
 max-height: 20px;
}

.mastergrid {
  display: grid; 
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
  border-right: 2px solid #eee; 
  padding: 20px 20px 10px;
  }
.lastup { 
  grid-area: 1 / 2 / 3 / 3; 
  background: #f5f5f5;
  padding: 20px;
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
 </style>