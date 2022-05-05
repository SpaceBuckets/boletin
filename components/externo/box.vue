<template>
  <div>
 

    <section class="emaerto">
 
      <div class="reflexed">
        <div class="acti-list">

          <h2>Sector Externo</h2>

            <div class="relist">
            <div :class="{active: sigla === currActive}" @click="currActive = sigla" v-for="(item, sigla) in econ">

              <span> <strong style="text-transform:uppercase" v-if="sigla === 'ice'">{{sigla}}.</strong> {{ item }}</span> 

            </div>
          </div>
          <div class="redesc">
            <p v-html="econdesc[currActive]">
            </p>
            <i>Fuente: <a href="#">INDEC</a> </i> <br />
            <i>Ultima actualizacion: {{ econdates[currActive] }}</i>
          </div>
        </div>

        <component :is="`externo-${currActive}`"/>

      </div>
    </section>

  </div>
</template>

<script>

import saldoDates from "../../json/impo/dolar/dates.json";
import iceDates from "../../json/expo/ice/dates.json";
import expoDates from "../../json/impo/precio/dates.json";
import impoDates from "../../json/impo/dolar/dates.json";


export default {
  data() {
    return {
      currActive: 'saldo',
      econdates: {
        saldo: saldoDates[saldoDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        expo: expoDates[expoDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        ice: iceDates[iceDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        impo: impoDates[impoDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
       },         
      econdesc: {
        ipc: "Los índices de precios al consumidor miden la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
        sal: "El Índice de salarios estima las variaciones de los salarios tanto del sector público como del privado en cada mes. Para la obtención de los salarios se efectúa una encuesta de periodicidad mensual a las empresas del sector privado y del sector público.",
        cbt: 'La medición de la pobreza con el método de Línea de Pobreza (LP) consiste en establecer, a partir de los ingresos de los hogares, si éstos tienen capacidad de satisfacer por medio de la compra de bienes y servicios.',
       },
      econ: {
        saldo: "Intercambio Comercial",
        expo: "Exportaciones",
        impo: "Importaciones",
        ice: "Indice de Condiciones Externas",
        //emp: "Tasa de desempleo",
        //cbt: "Canasta Basica Total y Alimentaria",
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

 