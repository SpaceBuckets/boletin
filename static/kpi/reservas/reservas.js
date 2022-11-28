module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "reservas"
 
  await parsers.datosGobarAPI(kpi, "datos", '174.1_RRVAS_IDOS_0_0_36')

  var post = {
    kpi,
  t: "Reservas BCRA",
  st: "En miles de millones de USD",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p><strong>El EMAE es un indicador provisorio de la evolución del PIB</strong> a precios constantes de 2004 que se difunde con un rezago de 50 a 60 días de concluido el mes de referencia, de acuerdo al <a href='/'>calendario de difusión del INDEC</a>.</p><p>Incluye la serie original (número índice y la variación porcentual respecto al mismo mes del año anterior), la serie desestacionalizada y la tendencia–ciclo (número índice y variación respecto al mes inmediato anterior).</p> <p><em>Ofrece una pauta del comportamiento de la actividad económica real</em> con una frecuencia mayor a la del PIB trimestral a precios constantes. Su cálculo se estructura en la agregación del valor agregado a precios básicos de cada una de las actividades económicas más los impuestos netos de subsidios a los productos, utilizando las ponderaciones de las cuentas nacionales base 2004 de la República Argentina.</p><p>Este indicador <strong>se elabora con información parcial</strong>, de carácter provisorio -dado que en algunos casos es corregida y/o completada por la fuente- o con indicadores alternativos a los que se utilizan para el cálculo trimestral, en tanto se han evaluado como adecuadas aproximaciones. Dado que la estimación del PIB trimestral reúne mayor cantidad de datos, es habitual que se observen diferencias entre las variaciones trimestrales de ambos indicadores.</p>",
  f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  max: 90000,
  cat: "Política Monetaria",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0.1)',
        label: "Reservas Internacionales",
        data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
        borderColor: '#2E78D2',
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

