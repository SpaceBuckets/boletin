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
 
      <component :is="`cuentas-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "deficit",
      econ: {
        deficit: "Ahorro y Desahorro",
        subsidios: "Subsidios Economicos",
        balanza: 'Balanza Comercial',
        planes: 'Politica de Ingresos'
      },
    };
  },
};
</script>

 