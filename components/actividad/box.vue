<template>
  <div>
    <section class="emaerto">
       <h2>Actividad Económica</h2>
      <div class="repills">
        <div
          :class="{ active: sigla === currActive }"
          @click="currActive = sigla"
          v-for="(item, sigla) in econ"
        >
          <span
            ><strong style="text-transform: uppercase">{{
              sigla
            }}</strong></span
          >
        </div>
      </div>
 
      <component :is="`actividad-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "emae",
      econ: {
        emae: "Estimador Mensual de Actividad",
        //pbi: "Producto Bruto Interno",
        ipi: "Indice de Produccion Industrial",
        isac: "Indicador Sintético de la Construcción",
        ucii: "Utilizacion de la Capacidad Instalada",
      },
    };
  },
};
</script>

 