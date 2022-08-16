<template>
  <section class="chart">
    <div class="reloader">
    <svg id="spinnerLoaderRef" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="100" height="100" overflow="visible" fill="#dddddd" stroke="#dddddd" class="single-loader"><defs> <circle id="spinner" r="4" cx="50" cy="50" transform="translate(0 -30)"/>    </defs> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(0 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(30 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.08s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(60 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.16s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(90 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.24s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(120 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.32s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(150 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(180 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.48s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(210 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.56s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(240 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.64s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(270 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.72s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(300 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.8s" repeatCount="indefinite"/>    </use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#spinner" transform="rotate(330 50 50)"><animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.88s" repeatCount="indefinite"/>    </use> </svg>

    </div>
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
    <div class="chartcontain">
    <charts-line
      :chart="chart"
      :key="updated"
    />
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
      chart: require(`~/json/confluence/${this.data}.json`),
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

 <style lang="scss">
 canvas {
  background: #fff;
 }
select#fecha {
      margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 2px;
 }

 .chartcontain {
   position: absolute;top: 55px;bottom: 15px;left: 20px;right:15px;
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
 }
 </style>