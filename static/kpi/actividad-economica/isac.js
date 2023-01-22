module.exports = (async function() {

  const parsers = require("../../parsers");

  const kpi = "isac"
 
 
  try {
 
  const estacional = await parsers.datosGobarAPI(kpi, 'estacional', '33.2_ISAC_SIN_EDAD_0_M_23_56')
  const tendencia = await parsers.datosGobarAPI(kpi, 'tendencia', '33.2_ISAC_CICLOCIA_0_M_20_62')
  const base = await parsers.datosGobarAPI(kpi, 'base', '33.2_ISAC_NIVELRAL_0_M_18_63')

  var post = {
    kpi,
  t: "ISAC",
  st: "Indicador Sintético de la Actividad de la Construcción",
  sd: "El indicador ISAC <em>muestra la evolución del sector de la construcción</em> tomando como referencia los consumos aparentes de insumos requeridos en la actividad. ",
  c: "<p>El indicador sintético de la actividad de la construcción (ISAC) muestra la evolución del sector tomando como referencia los consumos aparentes de insumos requeridos en la construcción. El consumo aparente se calcula como la suma de los despachos al mercado interno de producción nacional mas las importaciones para cada uno de los insumos que componen el indice general del ISAC.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indicador-sintetico-actividad-construccion-isac-base-2004/archivo/sspm_33.2",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-3-42",
  frec: "Mensual", 
  d: "El indicador ISAC <em>muestra la evolución del sector de la construcción</em> tomando como referencia los consumos aparentes de insumos requeridos en la actividad. ",
  min: 0,
  max: 300,
  cat: "Actividad Económica",
  catslug: "actividad-economica",
  chartdata: {
    labels: base.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: estacional.d,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Tendencia",
        data: tendencia.d,
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: base.d,
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

