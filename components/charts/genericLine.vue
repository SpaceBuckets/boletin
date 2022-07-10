<template>
  <section class="chart">
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

 
 </style>