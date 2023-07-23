module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "desempleo"
const payload = await parsers.datosGobarAPI('45.2_ECTDT_0_T_33')
  const post = {
    kpi,
    t: "Desempleo",
    st: "Porcentaje Sobre el Total de la Población",
    sd: "",
    c: "<p>El indicador de desempleo en Argentina mide el porcentaje de la población económicamente activa (PEA) que se encuentra desocupada, es decir, que no tiene empleo y está buscando trabajo de manera activa. Este indicador se calcula trimestralmente por el Instituto Nacional de Estadística y Censos (INDEC) a través de la Encuesta Permanente de Hogares (EPH), que se realiza en todo el país y abarca a las principales ciudades.</p><p>La PEA está compuesta por todas las personas mayores de 14 años que están trabajando o buscando trabajo activamente. Por lo tanto, el indicador de desempleo no incluye a quienes no están buscando trabajo o a quienes no están disponibles para trabajar, como estudiantes, jubilados, amas de casa, entre otros.</p><p>El indicador de desempleo es considerado una medida clave del estado de la economía de un país, ya que refleja el grado de utilización de los recursos productivos y el nivel de bienestar de la población. Un alto nivel de desempleo puede indicar una economía en recesión o estancamiento, mientras que un bajo nivel de desempleo puede ser indicativo de una economía en crecimiento y expansión. Por esta razón, el indicador de desempleo es seguido de cerca por analistas económicos, inversionistas y responsables de política económica.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_45/archivo/sspm_45.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    feat: true,

    dimensions: [
      {
        label: "General",
        data: payload,
        
        },
      {  
        label: "CABA",
        data: await parsers.datosGobarAPI('45.2_ECTDTC_0_T_38'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "Cuyo",
        data: await parsers.datosGobarAPI('45.2_ECTDTCU_0_T_38'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "GBA",
        data: await parsers.datosGobarAPI('45.2_ECTDTG_0_T_37'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "Nordeste",
        data: await parsers.datosGobarAPI('45.2_ECTDTNE_0_T_42'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "Noroeste",
        data: await parsers.datosGobarAPI('45.2_ECTDTNO_0_T_42'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "Pampeana",
        data: await parsers.datosGobarAPI('45.2_ECTDTRP_0_T_49'),
        color: "rgba(46,120,210,0.15)",
      },
      {
        label: "Patagonia",
        data: await parsers.datosGobarAPI('45.2_ECTDTP_0_T_43'),
        color: "rgba(46,120,210,0.15)",
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

