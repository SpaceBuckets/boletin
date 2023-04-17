module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "isac"
const payload = await parsers.datosGobarAPI('33.2_ISAC_SIN_EDAD_0_M_23_56')
  const post = {
    kpi,
  t: "ISAC",
  st: "Indicador Sintético de la Actividad de la Construcción",
  sd: "El indicador ISAC <strong>muestra la evolución del sector de la construcción</strong> tomando como referencia los consumos aparentes de insumos requeridos en la actividad. Se calcula a partir de la información proporcionada por un conjunto de empresas constructoras que realizan obras en Argentina. ",
  c: "<p>El ISAC se calcula a partir de la información proporcionada por un conjunto de empresas constructoras que realizan obras en Argentina. Estas empresas son seleccionadas por el INDEC y representan una muestra de la actividad económica del sector de la construcción en el país.</p><p>El indicador se construye utilizando una fórmula que combina la superficie a construir, los montos de los contratos y los índices de precios, entre otras variables. De esta forma, se puede obtener una medida de la producción del sector de la construcción en términos monetarios.</p><p>El ISAC se presenta en forma de índice, con una base de referencia establecida en un período determinado (por ejemplo, el año 2016), y se expresa en términos porcentuales. De esta manera, se puede comparar el nivel de actividad económica del sector de la construcción en diferentes momentos del tiempo.</p><p>Es importante destacar que el ISAC es un indicador complementario al EMAE (Estimador Mensual de la Actividad Económica) del INDEC, ya que la construcción es un sector clave de la economía argentina y su evolución tiene un impacto significativo en el desempeño económico general del país.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-indicador-sintetico-actividad-construccion-isac-base-2004/archivo/sspm_33.2",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-3-42",
  frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'), 
  d: "El indicador ISAC <em>muestra la evolución del sector de la construcción</em> tomando como referencia los consumos aparentes de insumos requeridos en la actividad. ",
  min: 0,
  max: 250,
  dimensions: [
      {
        label: "Desestacionalizado",
        data: payload,
         
      },
      {
        label: "Tendencia",
        data: await parsers.datosGobarAPI('33.2_ISAC_CICLOCIA_0_M_20_62'),
        color: "#7a49a580",
      },
      {
        label: "Base",
        data: await parsers.datosGobarAPI('33.2_ISAC_NIVELRAL_0_M_18_63'),
        color: "rgba(46,120,210,0.25)",    
      },
    ] 
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

