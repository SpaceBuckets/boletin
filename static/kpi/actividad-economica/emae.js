module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "emae"
 const payload = await parsers.datosGobarAPI('143.3_NO_PR_2004_A_31')
    /*   a: '11.3_ISOM_2004_M_39',
      b: '11.3_VIPAA_2004_M_5',
      c: '11.3_ISD_2004_M_26',
      d: '11.3_VMASD_2004_M_23',
      e: '11.3_ITC_2004_M_21',
      f: '11.3_VMATC_2004_M_12',
      g: '11.3_AGCS_2004_M_41',
      h: '11.3_P_2004_M_20',
      i: '11.3_EMC_2004_M_25',
      j: '11.3_IM_2004_M_25',
      k: '11.3_SEGA_2004_M_48',
      l: '11.3_C_2004_M_60',
      m: '11.3_CMMR_2004_M_10',
      n: '11.3_HR_2004_M_24',
      o: '11.3_TAC_2004_M_60',   */
 
  const post = {
    kpi,
    t: "EMAE",
    st: "Estimador Mensual de Actividad Económica",
    sd: "El Estimador Mensual de Actividad Económica (EMAE) es un indicador de la evolución del PIB a precios constantes de 2004 que se difunde mensualmente de acuerdo al <a href='https://www.indec.gob.ar/indec/web/Calendario-Fecha-0'>calendario de difusión del INDEC</a>. <strong>Refleja la evolución mensual de la actividad económica</strong> de 16 sectores productivos y con ello permite anticipar las tasas de variación del producto interno bruto trimestral.",
    min: 80,
    max: 180,
    c: "<p><strong>El Estimador Mensual de Actividad Económica (EMAE) es un indicador de la evolución del PIB</strong> a precios constantes de 2004 que se difunde mensualmente de acuerdo al <a href='/'>calendario de difusión del INDEC</a>. Incluye la serie original (número índice y la variación porcentual respecto al mismo mes del año anterior), la serie desestacionalizada y la tendencia–ciclo (número índice y variación respecto al mes inmediato anterior).</p><p>El EMAE se construye utilizando información de diversos sectores económicos, tales como la industria manufacturera, la construcción, el comercio, el transporte, entre otros. El indicador se basa en la producción de bienes y servicios en el país y se calcula a través de una fórmula que combina los valores de cada sector ponderados por su importancia relativa en la economía.</p><p>El EMAE se presenta en forma de índice, el cual se establece en un período de referencia o base (por ejemplo, el año 2016) y se expresa en términos porcentuales. De esta manera, se puede comparar el nivel de actividad económica en distintos momentos en el tiempo y observar su evolución.</p><p>Es importante destacar que el EMAE es una estimación mensual y se publica con un retraso de alrededor de 30 días después de finalizado el mes de referencia. Además, el INDEC realiza ajustes en el cálculo del indicador para corregir posibles distorsiones en los datos, como cambios estacionales o efectos de días hábiles.</p><p>En resumen, el EMAE es un indicador clave para entender la evolución de la actividad económica en Argentina en el corto plazo y es utilizado por diversos actores del sector público y privado para tomar decisiones y planificar estrategias.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/it/dataset/sspm-estimador-mensual-actividad-economica-emae-base-2004/archivo/sspm_143.3",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-9-48",
    frec: parsers.detectDataType(payload), 
    fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'), 
    d: "El Estimador Mensual de Actividad Económica (EMAE) refleja la <strong>evolución mensual de la actividad económica</strong> del conjunto de los sectores productivos a nivel nacional.",
    feat: true,

    dimensions: [
      {
        label: "Desestacionalizado",
        data: payload,
        
      },
      {
        label: "Tendencia",
        data: await parsers.datosGobarAPI('143.3_NO_PR_2004_A_28'),
        color: "#7a49a580",        
        borderWidth: 1,
      },
      {
        label: "Base",
        data: await parsers.datosGobarAPI('143.3_NO_PR_2004_A_21'),
        color: "rgba(46,120,210,0.25)",        
        borderWidth: 1,
      },
    ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

