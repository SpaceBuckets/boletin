<template>
  <div>
    <div class="headbert" >
      <div>
        <div>
          
      <h1>Tachame la Macro</h1>
          <em>Febo asoma; ya sus rayos, iluminan el histórico contexto.</em> Esta colección de indicadores intenta develar de donde viene y hacia donde va la macroeconomía Argentina.
        </div>
 
        <div class="capis">
          <div>
            <div>Población</div>
            <h2>47.3M</h2>
            <div>Censo 2022</div>
          </div>

          <div>
            <div>PBI per capita</div>
            <h2>$1,015M</h2>
            <div>Dato 2020</div>
          </div>

          <div>
            <div>HDI</div>
            <h2>0.845</h2>
            <div>Dato 2020</div>
          </div>
          <div>
            <div>GINI</div>
            <h2>42.9</h2>
            <div>Dato 2020</div>
          </div>
        </div>
      </div>
    </div>
          <div class="navigator" :class="{active: $state.isOpen}">
        <h5>Indicadores</h5>
        <div class="separator" v-for="(kpi, i) in $state.indicadores">
          <div v-if="i === 'actividad'">Actividad Económica</div>
          <div v-if="i === 'precios'">Precios y Salarios</div>
          <div v-if="i === 'monetaria'">Política Monetaria</div>
          <div v-if="i === 'externo'">Sector Externo</div>
          <label v-for="(pepe, e) in kpi">
            <input
              type="checkbox"
              :checked="$state.selectedkpis.includes(e)"
              @click="setCheck(e)"
            />

            <span>{{ pepe }}</span>
          </label>
        </div>

      </div>
                    <div class="backdrop" :class="{active: $state.isOpen}" @click="$state.isOpen = !$state.isOpen"></div>

  
    <div class="section-container">
               <actividad-box/>
                 <cuentas-box/>
                 <monetaria-box/>
                 <dolar-box/>

                 <precios-box/>
                 <produccion-box/>


 
 
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  methods: {
    setCheck(kpi) {
      if (this.$state.selectedkpis.includes(kpi)) {
        this.$state.selectedkpis.splice(
          this.$state.selectedkpis.indexOf(kpi),
          1
        );
      } else {
        this.$state.selectedkpis.push(kpi);
        this.$nextTick(() => {
          var element = this.$refs[kpi];
          var top = element[0].offsetTop-150;
          console.log(top)
          window.scrollTo({
  top: top,
   behavior: 'smooth'
});
        });
      }
    },
    changeClick(kpi) {
      this.$state.currActive = kpi;
      this.$state.real.datasets[0].data = this.$state.kpis[kpi]["d"];
      this.$state.real.datasets[1].data = this.$state.kpis[kpi]["t"];
      this.$state.real.datasets[2].data = this.$state.kpis[kpi]["b"];
      this.$state.real.labels = this.$state.kpis[kpi]["dates"];
      (this.$state.currDesc = this.$state.kpis[kpi].desc),
        this.$state.updated++;
    },
  },
};
</script>

 