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
 
      <component :is="`produccion-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "gas",
      econ: {
        gas: "Ahorro y Desahorro",
        petroleo: "Subsidios Economicos",
        acero: 'Balanza Comercial',
        autos: 'Balanza Comercial',
        cereales: 'Politica de Ingresos'
      },
    };
  },
};
</script>

 