<template>
  <div class="footerpepe">
             <h2>Indicadores Similares</h2>
 <br>
  <div v-for="related in recommended">
    
         <nuxt-link :to="{ name: `cat-kpi`, params: { kpi: related } }">
          {{ related.t }}        </nuxt-link><br>

          {{ related.st }}
          <br><br>
  </div>
 
 
 
  </div>
</template>

<script>
   
import meganav from "~/static/refolders.json";

export default {
  props: {
    altTitle: {
      type: String,
      required: false,
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
    minDate: {
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
      renav: meganav,
      recommended: []
    };
  },
  mounted() {
  var results = this.findSiblings(`${this.data}.js`,this.renav);
    for (const item of results) {
      this.recommended.push(require(`~/static/data/${item.replace('.js','')}.json`))
  }
  },
  methods: { 
  findSiblings(str, obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const siblings = obj[key]._contents;
      if (siblings && siblings.includes(str)) {
        return siblings.filter((sibling) => sibling !== str);
      } else {
        const result = this.findSiblings(str, obj[key]);
        if (result) {
          return result;
        }
      }
    }
  }
  return null;
},





     filteredArray() {
      return this.chart.chartdata.labels
        .filter((val, index, arr) => index > arr.length - 23)
        .reverse();
    },
    getVariation(i) {
      var currentNum = this.chart.chartdata.datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },    
  },
};
</script>

 <style scoped>

 
 </style>