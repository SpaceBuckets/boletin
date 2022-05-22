<template>
  <div>
    <section class="emaerto">
       <h2>Cuentas Nacionales</h2>
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
 
      <component :is="`dolar-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "cambio",
      econ: {
        cambio: "Ahorro y Desahorro",
        brecha: "Subsidios Economicos",
        tcrm: 'Balanza Comercial',
        rofex: 'Politica de Ingresos'
      },
    };
  },
};
</script>

 