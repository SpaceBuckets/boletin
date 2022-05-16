<template>
  <div>
 

    <section class="emaerto">
 
      <div class="reflexed">
        <div class="acti-list">

          <h2>Precios y Salarios</h2>

            <div class="relist">
            <div :class="{active: sigla === currActive}" @click="currActive = sigla" v-for="(item, sigla) in econ">

              <span> <strong v-if="sigla === 'ipc' || sigla === 'rem'" style="text-transform:uppercase">{{sigla}}.</strong> {{ item }}</span> 

            </div>
          </div>
          <div class="redesc">
            <p v-html="econdesc[currActive]">
            </p>
            <i>Fuente: <a href="#">INDEC</a> </i> <br />
            <i>Ultima actualizacion: {{ econdates[currActive] }}</i>
           </div>
        </div>

        <component :is="`precios-${currActive}`"/>

      </div>
    </section>

  </div>
</template>

<script>

import empleoDates from "../../json/empleo/general/dates.json";
import ipcDates from "../../json/ipc/general/dates.json";
import remDates from "../../json/rem/interanualrem/dates.json";
import salDates from "../../json/empleo/privadob/dates.json";
 
export default {
  data() {
    return {
      currActive: 'ipc',
      econdates: {
        emp: empleoDates[empleoDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        ipc: ipcDates[ipcDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        sal: salDates[salDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        rem: remDates[remDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/')
      },
      econdesc: {
        ipc: "Los índices de precios al consumidor miden la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
        sal: "El Índice de salarios estima las variaciones de los salarios tanto del sector público como del privado en cada mes. Para la obtención de los salarios se efectúa una encuesta de periodicidad mensual a las empresas del sector privado y del sector público.",
        },
      econ: {
        ipc: "Índice de precios al consumidor",
        ipchistorico: "Inflación Histórica intermensual",
        ipchistorico2: "Inflación Histórica interanual",
        rem: 'Expectativa IPC interanual',
        sal: "Asalariados sector privado",
        emp: "Tasa de desempleo",
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

 