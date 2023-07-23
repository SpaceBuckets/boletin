<template>
  <div class="footerpepe">
    <h2>Indicadores Similares</h2>
    <br>
  <div class="sparkcontainer" v-for="(item, i) in recommended" :key="`${i}-${item.kpi}`">
        <nuxt-link  :to="{ name: `cat-kpi`, params: { kpi: item.kpi, cat: $route.params.cat } }">
          {{ item.t }} 
          
        </nuxt-link>
      <charts-genericSparkLine :key="`chart-${item.kpi}`" :data="item.kpi"/>
  </div>


          
         
   </div>
</template>

<script>
   
import meganav from "~/static/refolders.json";

export default {
  props: {
 
    data: {
      type: String,
      required: false,
    },
 
  },
  data() {
    return {
      chart: require(`~/static/data/${this.data}.json`),
      renav: meganav,
      recommended: [],
      parent: ''
    };
  },
  mounted() {

    var results = this.findSiblingsAndParent(`${this.data}.js`,this.renav);
 
     for (const item of results.siblings) {
      this.recommended.push(require(`~/static/data/${item.replace('.js','')}.json`))
    }
 
  },
  methods: {  
  findSiblingsAndParent(str, obj, parent = null) {
  for (const [key, value] of Object.entries(obj)) {
    if (value._contents && value._contents.includes(str)) {
      return {
        siblings: value._contents.filter(sibling => sibling !== str),
      };
    } else if (typeof value === 'object' && value !== null) {
      const result = this.findSiblingsAndParent(str, value, key);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

  },
};
</script>

 <style scoped lang="scss">

.sparkcontainer {
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-bottom: 12px;
    padding: 10px 10px 15px;
    max-height: 105px;
    a {
      display: block;
      margin-bottom: 10px;
    }
}
 </style>