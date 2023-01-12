module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "cer"
  try {

  await parsers.datosGobarAPI(kpi, "cer", '94.2_CD_D_0_0_10&start_date=2012-01-01')

  
  var post = {
    kpi,
  t: "CER",
  st: "Coeficiente de Estabilización de Referencia",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  kpi: "cer",
  c: "<p>El Banco Central de la República Argentina (BCRA), elabora un índice de ajuste diario, denominado Coeficiente de Estabilización de Referencia (CER). Este indicador refleja la evolución de la inflación, para lo cual se toma como base de cálculo la variación registrada en el Índice de Precios al Consumidor (IPC), el cual es elaborado por el INDEC (Instituto Nacional de Estadística y Censos)</p> <p>El CER fue introducido mediante el Decreto N° 214/2002 que dispuso la indexación de las deudas pesificada. Es publicado por el Banco Central de la República Argentina, siguiendo las pautas establecidas por el Ministerio de Economía en la Resolución N° 47/2002.</p>",
  fdr: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",  
  cat: "hide",
  catslug: "hide",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-cer-uva-uvi/archivo/sspm_94.2",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Diaria", 
  chartdata: {
  labels: require(`../../data/${generatedTime}/${kpi}/cer/dates.json`),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "CER",
      data: require(`../../data/${generatedTime}/${kpi}/cer/d.json`),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}
}
  

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()
