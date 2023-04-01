<template>
  <div class="footerpepe">
    <h2>Indicadores Similares</h2>
    <br>
  
        <nuxt-link v-for="(kpi, i) in recommended" :key="`${i}-${kpi}`" :to="{ name: `cat-kpi`, params: { kpi: kpi.kpi, cat: parent } }">
          {{ kpi.t }}
           <br>
          <p>{{ kpi.st }}</p>
        </nuxt-link>
          
          
         
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
    this.parent = results.parent
    for (const item of results.siblings) {
      this.recommended.push(require(`~/static/data/${item.replace('.js','')}.json`))
    }

  },
  methods: {  
findSiblingsAndParent(str, obj) {
  let result = null;
  Object.entries(obj).flatMap(([key, value]) =>
    (value._contents && value._contents.includes(str))
      ? (result = { parent: key, siblings: value._contents.filter(sibling => sibling !== str) }, [])
      : (typeof value === 'object' && value !== null) ? this.findSiblingsAndParent(str, value) : []
  );
  return result;
}
  },
};
</script>

 <style scoped>

 
 </style>