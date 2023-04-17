module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "cer"
  const payload = await parsers.datosGobarAPI('94.2_CD_D_0_0_10&start_date=2012-01-01')
  
  const post = {
    kpi,
    t: "CER",
    st: "Coeficiente de Estabilización de Referencia",
    sd: "",
    c: "<p>El CER (Coeficiente de Estabilización de Referencia) es un indicador creado por el Banco Central de la República Argentina (BCRA) para ajustar el valor de las deudas o inversiones en pesos argentinos por la inflación, con el objetivo de mantener su poder adquisitivo.</p><p>El CER se calcula diariamente y refleja la variación del Índice de Precios al Consumidor (IPC) del Instituto Nacional de Estadísticas y Censos (INDEC), que mide la evolución de los precios de los bienes y servicios en el país.</p><p>De esta manera, el CER permite ajustar los montos de los créditos, depósitos, bonos y otros instrumentos financieros denominados en pesos argentinos para que no pierdan valor en términos reales debido a la inflación.</p><p>Es importante destacar que el CER no refleja la tasa de interés de los instrumentos financieros, sino solamente el ajuste por inflación. Por lo tanto, si bien el CER es utilizado como referencia para la fijación de algunas tasas de interés, como las de los bonos ajustados por inflación, no es una tasa de interés en sí misma.</p>",
    fdr: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",  
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-cer-uva-uvi/archivo/sspm_94.2",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    dimensions: [
      {
        
        label: "CER",
        data: payload,
        color: "rgba(46,120,210,1)",
      },
    ],
  }


parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
