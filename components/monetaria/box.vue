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
 
      <component :is="`monetaria-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "tasa",
      econ: {
        tasa: "Tasa de Política Monetaria",
        reservas: 'Reservas Internacionales USD',
        comprasbcra: 'Compras Diarias USD',
         embi: "EMBI (Riesgo Pais)",
  /*       comprasmensual: 'Compras Mensuales USD',
        comprasanual: 'Compras Anuales USD', */
      },
    };
  },
};
</script>

 