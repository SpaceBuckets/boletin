module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "icl"
   const payload = await parsers.scrapeBCRA("7988")
  const post = {
    kpi,
    t: "ICL",
    st: "Índice para Contratos de Locacion",
    sd: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
    c: "<p>El Índice de Contratos de Locación (ICL) es un índice elaborado por el Banco Central de la República Argentina (BCRA) que mide la evolución de los precios de los alquileres de viviendas en el país.</p><p>Este índice se basa en una muestra representativa de contratos de locación de viviendas de distintas localidades del país, y se actualiza mensualmente. El objetivo del ICL es brindar información actualizada y confiable sobre la evolución de los precios de los alquileres, que es de gran importancia tanto para inquilinos como para propietarios e inversores en el mercado inmobiliario.</p><p>El ICL se calcula tomando como base el mes de julio de 2016, que se considera igual a 100 puntos, y se expresa en términos porcentuales. Es decir, si el índice sube un 5%, significa que los precios de los alquileres han aumentado un 5% con respecto a la base de julio de 2016.</p><p>El ICL es utilizado por distintos actores del mercado inmobiliario, tanto para tomar decisiones de inversión como para ajustar los precios de los alquileres de acuerdo a la inflación. Además, el BCRA utiliza este índice como uno de los indicadores para medir la evolución de los precios de la vivienda en el país.</p>",
    fd: "Scraped (Web)",
    fdr: "http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?fecha_desde=1900-01-01&fecha_hasta=2040-04-30&primeravez=1&serie=7988",
    fu: "BCRA",
    fur: "http://www.bcra.gob.ar/pdfs/PublicacionesEstadisticas/bolmetes.pdf",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "El Índice de Contratos de Locación (ICL) es un indicador creado por la Ley 27.551 con el fin de poder establecer parámetros de actualización a la hora de celebrar contratos de alquiler.",
    dimensions: [
        {
          
          label: "ICL",
          data: payload,
          color: "rgba(46,120,210,1)",    
        },
      ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()