<template>
  <div>
    <charts-kpiBoard :key="updated" edit :data="savedCells"/>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({route }) {
 
  },  
  data() {
    return {
        savedCells: {},
        updated: 0
/*       savedCells: {
    "1213": {
        "area": "1 / 1 / 2 / 3",
        "kpi": "header",
        "type": "Header",
        "hasChart": true
    },
    "1234": {
        "area": "1 / 3 / 2 / 4",
        "kpi": "sol",
        "type": "Sol",
        "hasChart": true
    },
    "1257": {
        "area": "1 / 5 / 2 / 6",
        "kpi": "comment",
        "type": "Comment",
        "hasChart": true
    },
    "3515": {
        "area": "3 / 1 / 5 / 5",
        "kpi": "emae",
        "type": "Line",
        "hasChart": true
    },
    "3557": {
        "area": "3 / 5 / 5 / 7",
        "kpi": "emae",
        "type": "Line",
        "hasChart": false
    },
    "5715": {
        "area": "5 / 1 / 7 / 5",
        "kpi": "cambio",
        "type": "Line",
        "hasChart": true
    },
    "5757": {
        "area": "5 / 5 / 7 / 7",
        "kpi": "cambio",
        "type": "Table",
        "hasChart": true
    },
    "7914": {
        "area": "7 / 1 / 9 / 4",
        "kpi": "balanza",
        "type": "Line",
        "hasChart": true
    },
    "7947": {
        "area": "7 / 4 / 9 / 7",
        "kpi": "deficit",
        "type": "Line",
        "hasChart": true
    },
    "91114": {
        "area": "9 / 1 / 11 / 4",
        "kpi": "ipc",
        "type": "Line",
        "hasChart": true
    }
} */
    };
  },
  async created() {
/*     var tmpSaved = await this.$supabase.from("data").select("*").match({url: this.$route.path.replace("/","")})
    tmpSaved = await tmpSaved.data[0].object
    this.savedCells = tmpSaved
    this.updated++ */

  },

};
</script>