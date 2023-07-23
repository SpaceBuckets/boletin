module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "deficit"
const payload = await parsers.datosGobarAPI('379.9_ING_CORR_2017__13_2')
  const post = {
    kpi,
  t: "Déficit Fiscal",
  st: "Ingresos, Gastos y Ahorro",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El déficit fiscal ocurre cuando los gastos del gobierno superan sus ingresos, lo que resulta en un endeudamiento del gobierno. Esto puede llevar a problemas económicos a largo plazo, ya que el gobierno debe pagar intereses sobre la deuda y eventualmente reembolsar el principal.</p><p>El déficit fiscal se mide generalmente en términos de porcentaje del producto interno bruto (PIB). Un déficit del 3% o menos se considera manejable, pero los déficits mayores pueden ser preocupantes y pueden requerir medidas de austeridad fiscal para equilibrar las cuentas públicas.</p><p>En Argentina, el déficit fiscal ha sido un problema recurrente en las últimas décadas, lo que ha llevado a una acumulación significativa de deuda pública. El gobierno ha implementado medidas para reducir el déficit fiscal, como la reducción de los subsidios a la energía y la eliminación de exenciones fiscales, aunque estas medidas también han generado críticas por su impacto en la población más vulnerable.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/ar/dataset/sspm-esquema-ahorro---inversion---financimmiento-sector-publico-nacional-base-caja/archivo/sspm_379.9",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    feat: true,
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  dimensions: [
      {
        label: "Ingresos",
        data: payload,
        color: "#009966",

      },
      {
        label: "Gastos",
        data: await parsers.datosGobarAPI('379.9_GTOS_CORR_017__14_1'),
        color: "#b22222CC",

      },
      {
        label: "Saldo",
        data: await parsers.datosGobarAPI('379.9_RESULTADO_017__41_83'),
        color: "#ccc",
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

