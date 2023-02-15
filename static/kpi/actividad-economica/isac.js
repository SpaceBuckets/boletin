module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "isac"
 
  const estacional = await parsers.datosGobarAPI('33.2_ISAC_SIN_EDAD_0_M_23_56')
  const tendencia = await parsers.datosGobarAPI('33.2_ISAC_CICLOCIA_0_M_20_62')
  const base = await parsers.datosGobarAPI('33.2_ISAC_NIVELRAL_0_M_18_63')

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
  chart: {
    dates: base,
    dimensions: [
      {
        label: "Desestacionalizado",
        data: estacional,
        color: "#2E78D2", 
      },
      {
        label: "Tendencia",
        data: tendencia,
        color: "#7a49a580",
      },
      {
        label: "Base",
        data: base,
        color: "rgba(46,120,210,0.25)",    
      },
    ] 
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

