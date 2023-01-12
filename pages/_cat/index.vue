<template>
<div>
  <h1>{{$route.params.cat.split("-").join(" ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})}}</h1>
   <p>El Estimador Mensual de Actividad Económica (EMAE) es un indicador de la evolución del PI a precios constantes de 2004 que se difunde mensualmente de acuerdo al <a href='/'>calendario de difusión del INDEC</a></p>
  <hr>
  <br>

<template v-if="$route.params.cat === 'hidrocarburos'">
     <charts-kpiBoard :data="savedCells" />


  </template>

  <template v-else>
      <div class="minflex">
    <section class="mincharto" v-for="item in nav[$route.params.cat]">
      <charts-genericLine :data="item.kpi"/>
    </section>
  


  </div>
    </template>


</div>

</template>

<script>

import meganav from '~/static/kpis.json'

export default {
  name: "IndexPage",
  async asyncData({route }) {
 
  },  
  data() {
    return {
      nav: meganav,
      savedCells: {
      1246: {
        area: "1 / 1 / 3 / 4",
        kpi: 'petroleo',
        type: "Line",
        hasChart: true,
   
      },
 
 
 
                          
        2367: {
        area: "1 / 4 / 3 / 7",
        kpi: 'gas',
        type: "Line",
        hasChart: true,
 
      },  

      4757: {
        area: "3 / 1 / 5 / 4",
        kpi: 'pozosperforados',
        type: "Line",
        hasChart: true,
 
      },
       2757: {
        area: "3 / 4 / 5 / 7",
        kpi: 'consumogas',
        type: "Line",
        hasChart: true,
 
      },
 
 
 
       
    }
    };
  },
 methods: {
  makeTitle(thisID) {
  return thisID.replace(/-/g, " ").replace(/\b[a-z]/g, function() {
    return arguments[0].toUpperCase();
  });
}
 }

};
</script>

<style scoped lang="scss">
div {
  color: white;
}
h1 {
  color: #eee;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 15px;
}
p {
  color: #eee;
  margin-bottom: 20px;
}
.minflex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  > * {
    flex: 1;
    min-width: calc(50% - 10px);
    margin: 0;
    //max-width:50%;
  }
}
</style>