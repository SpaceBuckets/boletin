<template>
  <div>
    <section class="emaerto">
       <h2>Precios y Salarios</h2>
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
 
      <component :is="`precios-${currActive}`" />
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currActive: "ipc",
      econ: {
        ipc: "IPC (Índice de Precios al Consumidor)",
        asalariados: "Asalariados sector privado",
        desempleo: "Tasa de desempleo",
      },
    };
  },
};
</script>

 