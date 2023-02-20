 
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cereales"
  

  const soja = await parsers.datosGobarAPI('34.2_STSOJ_0_P_16')
  const trigo = await parsers.datosGobarAPI('34.2_TTTRI_0_P_17')
  const girasol = await parsers.datosGobarAPI('34.2_GTGIR_0_P_19')
  const maiz = await parsers.datosGobarAPI('34.2_MTMAI_0_P_16')
 
  var post = {
    kpi,
  "t": "Producción de Cereales",
  "st": "En Toneladas",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "c": "<p>El indicador de Producción de Cereales de Argentina se refiere a la cantidad de cereales producidos en el país en un período determinado de tiempo, generalmente expresado en toneladas métricas. Los cereales incluyen soja, trigo, maíz, arroz, sorgo, avena y cebada, entre otros.</p><p>Argentina es uno de los principales productores de cereales del mundo, con una larga tradición en la producción de trigo y maíz. La producción de cereales es una parte importante de la economía del país, y es una fuente importante de divisas a través de las exportaciones.</p><p>La producción de cereales en Argentina está influenciada por varios factores, como las condiciones climáticas, los precios internacionales de los cereales, la tecnología agrícola y las políticas gubernamentales. La producción de cereales puede tener un impacto significativo en la economía del país, ya que puede influir en los precios de los alimentos, en la balanza comercial y en la rentabilidad del sector agrícola.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/sq/dataset/sspm-indicadores-evolucion-sector-agropecuario/archivo/sspm_34.2",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 80000000,
chart: {
  dates:soja,
    dimensions: [
      { 
        label: "Girasol",
        data: girasol,
        color: "rgba(46,120,210,0.25)",
      },
      { 
        label: "Maiz",
        data: maiz,
        color: "rgba(46,120,210,0.25)",
      },
      { 
        label: "Trigo",
        data: trigo,
        color: "rgba(46,120,210,0.25)",
      },                    
      {
        label: "Soja",
        data: soja,
        color: "#2E78D2",
      },
    ],
  }
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()