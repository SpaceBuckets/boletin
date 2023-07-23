<template>
<div>

<div class="pepecell">
  <h1>{{ repepenav[$route.params.cat]._emoji }} Indicadores sobre {{$route.params.cat.split("-").join(" ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})}}</h1>
   <p> {{descCats[$route.params.cat]}} </p>
   </div>

 
   
  
        <div class="minflex">
           <nuxt-link class="mincharto" v-for="item in repepenav[$route.params.cat]._contents" :to="`kpi/${item.slice(0, -3)}`" :key="`a-${item.slice(0, -3)}`">
                <charts-genericLine :index="true" :data="item.slice(0, -3)" />
            </nuxt-link> 
        </div>

     

 </div>
  
</div>
</template>

<script>

import meganav from '~/static/kpis.json'
import ultranav from '~/static/refolders.json'

const categorydescription = {
  'actividad-economica': 'Esta categoría se enfoca en el estudio y análisis de la actividad económica en general, incluyendo aspectos como la producción, el empleo, el crecimiento y otros indicadores macroeconómicos. También aborda temas como la competencia, la innovación y el desarrollo de nuevos mercados.',
  'dolar': 'Esta categoría se enfoca en el análisis del tipo de cambio del dólar estadounidense con respecto a otras monedas, así como su impacto en la economía nacional. Además, también se consideran aspectos como las reservas internacionales, la balanza comercial y otros factores que influyen en el valor del dólar en el mercado.',
  'finanzas': 'Esta categoría se enfoca en el análisis del sistema financiero, incluyendo aspectos como la banca, los mercados de valores y otros instrumentos financieros. También se aborda el estudio de los riesgos financieros, la regulación y supervisión de las instituciones financieras, así como el impacto de las políticas económicas en el sector financiero.',
  'energia': 'Esta categoría se enfoca en el análisis del sector energético, incluyendo aspectos como la producción, el consumo y la política energética. Además, también se estudian temas como la seguridad energética, la eficiencia energética y el impacto ambiental de la generación de energía.',
  'cuentas-nacionales': 'Esta categoría se enfoca en el análisis de las cuentas nacionales, incluyendo aspectos como el PIB, la inflación y otros indicadores económicos. También se consideran temas como el empleo, la productividad y el crecimiento económico a largo plazo.',
  'comercio-exterior': 'Esta categoría se enfoca en el análisis del comercio exterior, incluyendo aspectos como las exportaciones, importaciones, acuerdos comerciales y otros temas relacionados. También se estudian temas como el proteccionismo, la competencia internacional y el impacto de la globalización en el comercio.',
  'precios': 'Esta categoría se enfoca en el análisis de los precios, incluyendo aspectos como la inflación, los precios al consumidor y otros indicadores relacionados. También se estudian temas como la fijación de precios en mercados monopolísticos, la regulación de precios y el impacto de las políticas económicas en la estabilidad de precios.',
  'salarios': 'Esta categoría se enfoca en el análisis de los salarios, incluyendo aspectos como el empleo, la remuneración y otros temas relacionados. También se estudian temas como la desigualdad salarial, la negociación colectiva y el impacto de las políticas económicas en el mercado laboral.',
  'consumo': 'Esta categoría se enfoca en el análisis del consumo, incluyendo aspectos como las ventas al por menor, el gasto de los hogares y otros indicadores relacionados. También se estudian temas como la preferencia del consumidor, la publicidad y el impacto de las políticas económicas en el consumo.',
  'agroindustria': 'Esta categoría se enfoca en el análisis de la agroindustria, incluyendo aspectos como la producción agrícola, la ganadería y otros temas relacionados. También se estudian temas como la seguridad alimentaria, el comercio internacional de productos agropecuarios y el impacto de las políticas económicas en el sector agroindustrial.',
  'otros': 'Esta categoría se enfoca en otros temas relacionados con la economía, como la historia económica, la economía ambiental y otros temas emergentes. También se consideran temas transversales que atraviesan varias categorías, como la economía digital, la innovación y el emprendimiento.'
};


export default {
  name: "IndexPage",
  async asyncData({route }) {
 
  },  
  data() {
    return {
      nav: meganav,
      repepenav: ultranav,
      descCats: categorydescription,
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
  created() {
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
  color: #D3D3D3;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: normal;
}
p {
  color: #999;
  margin-bottom: 15px;
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
.mincharto {
    position: relative;
    width: 50%;
    min-height: 400px;
    max-height: 420px;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 15px;
    text-decoration: none;
    display: block;
    overflow: hidden;
  @media only screen and (max-width: 980px) {
    min-width: 100% !important;
    max-width: 100% !important;
    border-radius: 0 !important;
    display: flex !important;
    padding: 15px !important;
  }    
}
.pepecell {
  padding: 20px;
  background: #1C1C1C;
  border-radius: 6px;
  margin-bottom: 10px;
  p {
    margin-bottom: 0 !important;
  }
}
</style>