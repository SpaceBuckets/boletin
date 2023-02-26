<template>
  <div class="footerpepe">
    <h2>Indicadores Similares</h2>
    <br>
      <div v-for="related in recommended">
         <nuxt-link :to="{ name: `cat-kpi`, params: { kpi: related } }">
          {{ related.t }}        </nuxt-link><br>
          <p>{{ related.st }}</p>
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
      return Object.values(obj).reduce((acc, val) => {
        if (val && typeof val === 'object') {
          if (val._contents && val._contents.includes(str)) {
            return val._contents.filter((sibling) => sibling !== str);
          }
          return this.findSiblings(str, val) || acc;
        }
        return acc;
      }, null);
    },
  },
};
</script>

 <style scoped>

 
 </style>