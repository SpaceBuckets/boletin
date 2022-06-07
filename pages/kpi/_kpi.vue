<template>
  <div class="dashboard-container">
    <div class="headbert internal">
      <div>
        <div>
          <h2>
            <strong>{{ post.t }}</strong>. {{ post.st }}
          </h2>
          <p v-html="post.sd"></p>
        </div>

        <div class="capis">
          <div>
            <div>Última</br>Actualización</div>
            <h3>{{getLastUpdated().slice(0, -3) }}</h3>
           </div>          
          <div v-for="(capis, i) in post.capis">
             <div>Var.</br>{{ i }}</div>
            <h3 v-if="i === 'interanual'">{{getCapiInterVariation(capis[0])}}%</h3>
            <h3 v-if="i !== 'interanual'">{{getCapiVariation(capis[0])}}%</h3>

           </div>

   
        </div>
      </div>
    </div>
    <div class="recontent-container">
      <div class="content-cell" style="min-width: 100%;">
        <lazy-charts-genericLine :data="post.kpi" :maxVal="post.maxval" :minVal="post.minval" :chartHeight="440" />
      </div>
      <div class="content-cell" style="flex: 2;padding-right:100px;">
        <h3>Metodología</h3>
        <div v-html="post.c"></div>
        <i>Fuente: <a :href="post.f">Metodología INDEC Nº 20</a></i>
      </div>
      <div class="content-cell">
        <section class="flexedtable">
          <div>
            <div>
              <div>Fecha</div>
              <div>Tendencia</div>
              <div>Serie</div>
              <div>Variacion</div>
            </div>
          </div>
          <div class="flexedcontent">
            <div v-for="(dates, i) in filteredArray()" :key="`aa${i}`">
              <div>{{ dates }}</div>
              <div>
                {{
                  $kpi[post.kpi].datasets[0].data
                    .filter((val, index, arr) => index > arr.length - 24)
                    .reverse()
                    [i]
                }}
              </div>
              <div>
                {{
                  $kpi[post.kpi].datasets[0].data
                    .filter((val, index, arr) => index > arr.length - 24)
                    .reverse()
                    [i]
                }}
              </div>
              <div class="green" :class="{ red: getVariation(i) < 0 }">
                {{ getVariation(i) + "%" }}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { singlePost } from "~/scripts/flatDB";

export default {
  name: "Details",
  async asyncData({ params }) {
    const post = await singlePost(params.kpi);
    return { post };
  },
  data() {
    return {};
  },
 
  methods: {
    getLastUpdated() {
      const formatter = new Intl.DateTimeFormat('es', { month: 'short',year: 'numeric' });
      const lastupdate = formatter.format(new Date(this.$kpi[this.post.kpi].labels.slice(-1)[0]));

      return this.$kpi[this.post.kpi].labels.slice(-1)[0]
    },    
    getCapiVariation(i) {
      var A = this.$kpi[this.post.kpi].datasets[i].data.slice(-1)[0]
      var B = this.$kpi[this.post.kpi].datasets[i].data.slice(-2)[0]
      return (((A - B) / A) * 100.0).toFixed(2);
 
    },        
    getCapiInterVariation(i) {
      var A = this.$kpi[this.post.kpi].datasets[i].data.slice(-1)[0]
      var B = this.$kpi[this.post.kpi].datasets[i].data.slice(-10)[0]
      return (((A - B) / A) * 100.0).toFixed(2);
    },
    filteredArray() {
      return this.$kpi[this.post.kpi].labels
        .filter((val, index, arr) => index > arr.length - 23)
        .reverse();
    },
    getVariation(i) {
      var currentNum = this.$kpi[this.post.kpi].datasets[0].data
        .filter((val, index, arr) => index > arr.length - 24)
        .reverse();
      var A = currentNum[i];
      var B = currentNum[i + 1];
      return (((A - B) / A) * 100.0).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
</style>

 