<template>
  <div>


<div class="dashboard-container">
    <div class="headbert" >
      <div>
        <div>
          
      <h1>Tachame la Macro</h1>
          <em>Febo asoma; ya sus rayos, iluminan el histórico contexto.</em> Esta colección de indicadores intenta develar de donde viene y hacia donde va la macroeconomía Argentina.
        </div>
 
        <div class="capis">
          <div>
            <div>Población</div>
            <h2>47.3M</h2>
            <div>Censo 2022</div>
          </div>

          <div>
            <div>PBI per capita</div>
            <h2>$1,015M</h2>
            <div>Dato 2020</div>
          </div>

          <div>
            <div>HDI</div>
            <h2>0.845</h2>
            <div>Dato 2020</div>
          </div>
          <div>
            <div>GINI</div>
            <h2>42.9</h2>
            <div>Dato 2020</div>
          </div>
        </div>
      </div>
    </div>
<section id="actividad-row">
     <nuxt-link :to="{ name: `actividad-economica-kpi`, params: { kpi: 'emae', parent: 'actividad-economica' } }" >
        <genericLine title="EMAE. Estimador Mensual de Actividad Economica" kpi="emae" :chartHeight="330" />
      </nuxt-link>
     <nuxt-link :to="{ name: `actividad-economica-kpi`, params: { kpi: 'ucii', parent: 'actividad-economica' } }" >
         <genericLine title="UCII. Utilización de la Capacidad Instalada" kpi="ucii" :chartHeight="330" minDate="2018-06-01"/>

      </nuxt-link>
</section>
<section id="cuentas-row">
     <nuxt-link :to="{ name: `cuentas-nacionales-kpi`, params: { kpi: 'balanza', parent: 'cuentas-nacionales' } }" >
        <genericLine title="Balanza Comercial" kpi="balanza" :chartHeight="330" :minDate="`2014-06-01`"/>
      </nuxt-link>
     <nuxt-link :to="{ name: `cuentas-nacionales-kpi`, params: { kpi: 'deficit', parent: 'cuentas-nacionales' } }" >
        <component is='cuentas-nacionales-deficit' :chartHeight="330" minDate="2016-06-01"></component>
      </nuxt-link>
</section>
<section id="monetaria-row">
     <nuxt-link :to="{ name: `precios-salarios-kpi`, params: { kpi: 'ipc', parent: 'precios-salarios' } }" >
        <component is='precios-salarios-ipc' :chartHeight="330" minDate="2008-06-01"></component>
      </nuxt-link>
     <nuxt-link :to="{ name: `politica-monetaria-kpi`, params: { kpi: 'cambio', parent: 'politica-monetaria' } }" >
        <component is='politica-monetaria-cambio' :chartHeight="330" minDate="2016-06-01"></component>
      </nuxt-link>
     <nuxt-link :to="{ name: `politica-monetaria-kpi`, params: { kpi: 'tasa', parent: 'politica-monetaria' } }" >
        <component is='politica-monetaria-tasa' :chartHeight="330" minDate="2016-06-01"></component>
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

 