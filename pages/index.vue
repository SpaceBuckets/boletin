<template>
  <div>
    <charts-kpiBoard edit :data="savedCells"/>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      savedCells: {
    "1315": {
        "area": "1 / 1 / 3 / 5",
        "kpi": "emae",
        "type": "Line",
        "hasChart": true,
     },
    "1357": {
        "area": "1 / 5 / 3 / 7",
        "kpi": "ucii",
        "type": "Line",
        "hasChart": true,

     },
    "3514": {
        "area": "3 / 1 / 5 / 4",
        "kpi": "balanza",
        "type": "Line",
        "hasChart": true,

     },
    "3547": {
        "area": "3 / 4 / 5 / 7",
        "kpi": "deficit",
        "type": "Line",
        "hasChart": true,

     },
    "5713": {
        "area": "5 / 1 / 7 / 3",
        "kpi": "ipc",
        "type": "Line",
        "hasChart": true,

     },
    "5735": {
        "area": "5 / 3 / 7 / 5",
        "kpi": "cambio",
        "type": "Line",
                "hasChart": true,

     },
    "5757": {
        "area": "5 / 5 / 7 / 7",
        "kpi": "tasa",
        "type": "Line",
                "hasChart": true,

     }
},      
    };
  }
};
</script>