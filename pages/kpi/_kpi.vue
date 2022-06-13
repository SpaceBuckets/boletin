<template>
  <div>
    <charts-kpiBoard :data="savedCells" />
  </div>
</template>

<script>
export default {
  name: "Details",
  async asyncData({ params }) {
    const savedCells = {
      1267: {
        area: "1 / 6 / 2 / 7",
        kpi: params.kpi,
        type: "KpiUpdated",
        hasChart: true,
      },
      1416: {
        area: "1 / 1 / 4 / 6",
        kpi: params.kpi,
        type: "Line",
        hasChart: true,
      },
      2367: {
        area: "2 / 6 / 3 / 7",
        kpi: params.kpi,
        type: "KpiMensual",
        hasChart: true,
      },
      3467: {
        area: "3 / 6 / 4 / 7",
        kpi: params.kpi,
        type: "KpiAnual",
        hasChart: true,
      },
      4715: {
        area: "4 / 1 / 7 / 5",
        kpi: params.kpi,
        type: "Box",
        hasChart: true,
      },
      4757: {
        area: "4 / 5 / 7 / 7",
        kpi: params.kpi,
        type: "Table",
        hasChart: true,
      },
    };

    return { savedCells };
  },
};
</script>

<style lang="scss">
</style>

 