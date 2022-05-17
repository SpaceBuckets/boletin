<template>
  <div>

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

          <h2 class="pagetitle">Precios y Salarios</h2>



    <div class="section-container">
            <div>
        <section
          v-for="(repepes, currActive) in $state.indicadores.precios"
          :ref="repepes"
        >
          <component :is="`precios-${currActive}`" />
                </section>


        <!--         <actividad-box />
        <monetaria-box />

        <precios-box />

        <externo-box /> -->
      </div>

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


