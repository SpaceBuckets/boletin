<template>
  <div>
 

    <section class="emaerto">
 
      <div class="reflexed">
        <div class="acti-list">

          <h2>Política Monetaria</h2>

            <div class="relist">
            <div :class="{active: sigla === currActive}" @click="currActive = sigla" v-for="(item, sigla) in econ">

              <span> <strong v-if="sigla === 'tcrm' || sigla === 'bcra' || sigla === 'rofex'" style="text-transform:uppercase">{{sigla}}.</strong> {{ item }}</span> 

            </div>
          </div>
          <div class="redesc">
            <p v-html="econdesc[currActive]">
            </p>
            <i>Fuente: <a href="#">INDEC</a> </i> <br />
            <i>Ultima actualizacion: {{ econdates[currActive] }}</i>
          </div>
        </div>

        <component :is="`monetaria-${currActive}`"/>

      </div>
    </section>

  </div>
</template>

<script>

import bcraDates from "../../json/monetaria/reservas/dates.json";
import cambioDates from "../../json/monetaria/cambio/dates.json";
import maeDates from "../../json/rofex/mae/dates.json";
import rofexDates from "../../json/rofex/t1/dates.json";
import tasaDates from "../../json/monetaria/tasa/dates.json";
import trcmDates from "../../json/monetaria/tcrm/dates.json";


export default {
  data() {
    return {
      currActive: 'cambio',
      econdates: {
        tasa: tasaDates[tasaDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        cambio: cambioDates[cambioDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        tcrm: trcmDates[trcmDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        mae: maeDates[maeDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        rofex: rofexDates[rofexDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        bcra: bcraDates[bcraDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/')
      },      
      econdesc: {
        ipc: "Los índices de precios al consumidor miden la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
 
       },
      econ: {
        tasa: "Tasa de Política Monetaria",
        cambio: "Tipo(s) de Cambio",
        tcrm: "Tipo de Cambio Real Multilateral",
        mae: "Volumen MAE",
        rofex: 'Dolar Futuro',
        bcra: 'Reservas Internacionales USD',
        },
    };
  },
  methods: {
 
    handlePepe(kpi) {
      this.currActive = kpi;
/*       this.$state.real.datasets[0].data = this.$state.kpis[kpi]["d"];
      this.$state.real.datasets[1].data = this.$state.kpis[kpi]["t"];
      this.$state.real.datasets[2].data = this.$state.kpis[kpi]["b"];
      this.$state.real.labels = this.$state.kpis[kpi]["dates"]; */
         this.$state.updated++;
    },
  },
};
</script>

 