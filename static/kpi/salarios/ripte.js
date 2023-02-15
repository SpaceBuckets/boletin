module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ripte"
   
  const payload = await parsers.datosGobarAPI('158.1_REPTE_0_0_5')

  var post = {
    kpi,
  t: "RIPTE",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>RIPTE se define como la remuneración promedio sujeta a aportes al Sistema Integrado Previsional Argentino (SIPA) que perciben los trabajadores que se encuentran bajo relación de dependencia y que han sido declarados en forma continua durante los últimos 13 meses. Las variaciones de la RIPTE intervienen en el cálculo de la movilidad jubilatoria del Régimen General del Sistema Integrado Previsional Argentino (SIPA) y en el cálculo de las indemnizaciones por accidentes de trabajo. Su publicación se realiza a los 45 días de finalizado el periodo correspondiente debido al tiempo que transcurre entre la recepción y el procesamiento de las Declaraciones Juradas que los empleadores presentan ante la AFIP.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-remuneracion-imponible-promedio-trabajadores-estables-ripte/archivo/sspm_158.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  chart: {
    dates:payload,
    dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "RIPTE",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
      },
    ]

}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()