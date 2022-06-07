<template>
  <div>


<div class="dashboard-container index">
    <div class="headbert" >
      <div>
        <div>
          
      <h1>Tachame la Macro</h1>
          <em>Febo asoma; ya sus rayos, iluminan el histórico contexto.</em> Esta colección de indicadores intenta develar de donde viene y hacia donde va la macroeconomía Argentina.
        </div>
 
        <div class="capis">
          <div>
            <div>Población</div>
            <h3>47.3M</h3>
            <div>Censo 2022</div>
          </div>

          <div>
            <div>PBI per capita</div>
            <h3>$1,015M</h3>
            <div>Dato 2020</div>
          </div>

          <div>
            <div>HDI</div>
            <h3>0.845</h3>
            <div>Dato 2020</div>
          </div>
          <div>
            <div>GINI</div>
            <h3>42.9</h3>
            <div>Dato 2020</div>
          </div>
        </div>
      </div>
    </div>
<section id="actividad-row">
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'emae', parent: 'actividad-economica' } }" >
        <lazy-charts-genericLine title="EMAE" subtitle="Estimador Mensual de Actividad Economica" data="emae" :chartHeight="330" />
      </nuxt-link>
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'ucii', parent: 'actividad-economica' } }" >
         <lazy-charts-genericLine title="UCII" subtitle="Utilización de la Capacidad Instalada" data="ucii" :chartHeight="330" minDate="2018-06-01"/>

      </nuxt-link>
</section>
<section id="cuentas-row">
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'balanza', parent: 'cuentas-nacionales' } }" >
        <lazy-charts-genericLine title="Balanza Comercial" subtitle="Importaciones, Exportaciones y Saldo" data="balanza" :chartHeight="330" :minDate="`2014-06-01`"/>
      </nuxt-link>
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'deficit', parent: 'cuentas-nacionales' } }" >
         <lazy-charts-genericLine title="Deficit Fiscal" subtitle="Ingresos, Gastos y Ahorro" data="deficit" :chartHeight="330" :minDate="`2014-06-01`"/>

      </nuxt-link>
</section>
<section id="monetaria-row">
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'ipc', parent: 'precios-salarios' } }" >
      <lazy-charts-genericLine title="Inflacion" subtitle="Indice de Precios al Consumidor" data="ipc" :chartHeight="330" :minDate="`2008-06-01`" :maxVal="8" :minVal="0"/>

      </nuxt-link>
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'cambio', parent: 'politica-monetaria' } }" >
          <lazy-charts-genericLine title="Tipos de Cambio" subtitle="USD vs. Peso" data="cambio" :chartHeight="330" :minDate="`2014-06-01`"/>

      </nuxt-link>
     <nuxt-link :to="{ name: `kpi-kpi`, params: { kpi: 'tasa', parent: 'politica-monetaria' } }" >
      <lazy-charts-genericLine title="Tasas de Interés" subtitle="Segun BCRA" data="tasa" :chartHeight="330" :minDate="`2016-06-01`"/>

       </nuxt-link>
</section>


</div>
  
 <!--    <div class="section-container" v-for="(item, i) in kpis">
      <h2 style="min-width:100%;">{{i}}</h2>

      <nuxt-link :id="kpi" v-for="kpi in item" :key='`${i}`' :to="{ name: `${i}-kpi`, params: { kpi: kpi, parent: i } }" >
        <component :is='`${i}-${kpi}`' chartHeight="330" minDate="2016-06-01"></component>
      </nuxt-link>
      

 
 
    </div> -->
  </div>
</template>

<script>

 


export default {
  name: "IndexPage",
  data() {
    return {
 
    };
  },
 
};
</script>

 