<template>
  <div>
 
    <div class="contaein">
          <component :is="`${$route.path.replace($route.params.kpi,'').replace(/\//g, '')}-${$route.params.kpi}`" :chartHeight="420"></component>

    </div>
  </div>
</template>

<script>
import meganav from '~/json/kpisnav.json'

export default {
  name: "Details",
  data() {
    return {
      nav: meganav
    };
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

 