module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "merval"
 
const url = 'https://query1.finance.yahoo.com/v7/finance/download/M.BA?period1=0&period2=9674456596&interval=1d&events=history&includeAdjustedClose=true'
const payload = await parsers.datosGobarCSV(0,4,url)
  const post = {
    kpi,
    t: "MERVAL",
    st: "Indice",
    sd: "",
    c: "<p>El Merval es el índice bursátil más importante de Argentina, que representa el rendimiento de las acciones de las empresas más importantes que cotizan en la Bolsa de Comercio de Buenos Aires.</p><p>Merval es una sigla que significa 'Mercado de Valores', y es un índice que mide el desempeño de las acciones de las empresas líderes que cotizan en la Bolsa de Comercio de Buenos Aires. El índice se calcula a partir de las cotizaciones de las 17 acciones más representativas, en términos de liquidez y capitalización bursátil. Entre las empresas incluidas en el Merval se encuentran algunas de las más importantes y conocidas del país, como YPF, Banco Macro, Grupo Financiero Galicia, Telecom, Pampa Energía, entre otras.</p><p>El Merval es considerado un indicador clave del desempeño de la economía argentina, ya que refleja la situación de las empresas más importantes del país y, por ende, su capacidad de generar empleo e inversión. El comportamiento del índice está influenciado por factores macroeconómicos, como la inflación, la tasa de interés, el tipo de cambio y el clima de negocios en el país, así como por los resultados financieros de las empresas que lo componen.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-indices-bursatiles-argentina/archivo/sspm_169.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",

    dimensions: [
        {
          label: "Indice Merval",
          data: payload,
          
        },

      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

