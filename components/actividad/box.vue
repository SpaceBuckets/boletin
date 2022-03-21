<template>
  <div>
    <section class="emaerto">
      <div class="reflexed">
        <div class="acti-list">
          <h2>Actividad Económica</h2>
          <div class="relist">
            <div :class="{active: sigla === currActive}" @click="currActive = sigla" v-for="(item, sigla) in econ">
              <span><strong style="text-transform:uppercase">{{sigla}}</strong>. {{ item }}</span> 
            </div>
          </div>
          <div class="redesc">
            <p v-html="econdesc[currActive]"></p>
            <i>Fuente: <a href="#">INDEC</a> </i> <br />
            <i>Ultima actualizacion: {{ econdates[currActive] }}</i>
          </div>
        </div>
        <component :is="`actividad-${currActive}`"/>
      </div>
    </section>

  </div>
</template>

<script>

 import emaeDates from "../../json/emae/base/dates.json";
import ipiDates from "../../json/ipi/base/dates.json";
import isacDates from "../../json/isac/base/dates.json";
import uciiDates from "../../json/ucii/general/dates.json";


export default {
  
  data() {
    return {
      currActive: "emae",
      econdates: {
        emae: emaeDates[emaeDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        ipi: ipiDates[ipiDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        ucii: uciiDates[uciiDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
        isac: isacDates[isacDates.length - 1].replace(/-/g, "/").split('/').reverse().join('/'),
      },        
      econdesc: {
        emae: "El EMAE es un <strong>indicador provisorio de la evolución del PBI</strong> que ofrece una pauta del comportamiento de la actividad económica real. Se elabora con información parcial calculando la <strong>suma del valor agregado de las actividades económicas</strong>.",
        //pbi: "El producto interno bruto es una magnitud macroeconómica que expresa el valor monetario de la producción de bienes y servicios de demanda final de un país o región durante un período determinado, normalmente de un año o trimestrales.",
        ipi: "El índice de producción industrial manufacturero (IPI manufacturero) incluye <strong>un exhaustivo relevamiento de todas las actividades económicas</strong> que conforman el sector de la industria manufacturera, con cobertura para el total del país.",
        ucii: 'El indicador de la <strong>utilización de la capacidad instalada</strong> mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial. Comprende un panel de entre 600 y 700 empresas de todo el país.',
        isac: 'El indicador sintético de la actividad de la construcción (ISAC) <strong>muestra la evolución del sector</strong> tomando como referencia los consumos aparentes de insumos requeridos en la construcción. Lorem Ipsum dolor sit amet adquisitum verburulum et.'
      },
      econ: {
        emae: "Estimador Mensual de Actividad",
        //pbi: "Producto Bruto Interno",
        ipi: "Indice de Produccion Industrial",
        isac: "Indicador Sintético de la Construcción",
        ucii: "Utilizacion de la Capacidad Instalada",
      },
      actividades: {
        z: "Nivel General",
        a: "Agricultura y Ganadería",
        b: "Pesca y servicios conexos",
        c: "Explotación de Minas y Canteras",
        d: "Industria Manufacturera",
        e: "Electricidad, gas y agua",
        f: "Construcción",
        g: "Comercio mayorista y minorista ",
        h: "Hoteles y restaurantes",
        i: "Transporte y comunicaciones",
        j: "Intermediación financiera",
        k: "Actividades inmobiliarias",
        l: "Administración pública y defensa",
        m: "Enseñanza",
        n: "Servicios sociales y de salud",
        o: "Otras actividades de servicios",
      },
    };
  },
 
 
};
</script>

 