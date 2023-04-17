module.exports = (async function() {

  const parsers = require("@parsers");

   const kpi = "dxy"
  const url = 'https://query1.finance.yahoo.com/v7/finance/download/DX-Y.NYB?period1=0&period2=9674456596&interval=1d&events=history&includeAdjustedClose=true'
  const payload = await parsers.datosGobarCSV(0,4,url)
   const post = {
    kpi,
    t: "Indice DXY",
    st: "Tipo de Cambio Real Multilateral",
    sd: "El índice DXY (del inglés 'Dollar Index') es un indicador financiero que mide el valor del dólar estadounidense en comparación con otras seis monedas principales: el euro, el yen japonés, la libra esterlina, el dólar canadiense, la corona sueca y el franco suizo.",
    c: "<p>El índice DXY (del inglés 'Dollar Index') es un indicador financiero que mide el valor del dólar estadounidense en comparación con otras seis monedas principales: el euro, el yen japonés, la libra esterlina, el dólar canadiense, la corona sueca y el franco suizo. El índice DXY fue creado en 1973 por la Reserva Federal de Estados Unidos para proporcionar una referencia a los inversionistas y traders para evaluar el desempeño del dólar estadounidense.</p><p>El índice DXY se calcula como un promedio ponderado del valor del dólar estadounidense frente a las seis monedas mencionadas anteriormente, utilizando una fórmula que asigna un peso diferente a cada moneda. La fórmula actual asigna los siguientes pesos a cada moneda: euro (57,6%), yen (13,6%), libra esterlina (11,9%), dólar canadiense (9,1%), corona sueca (4,2%) y franco suizo (3,6%).</p><p>El índice DXY se utiliza como un indicador de la fortaleza o debilidad del dólar estadounidense en comparación con las otras monedas principales. Si el índice DXY sube, significa que el valor del dólar estadounidense está aumentando en comparación con las otras monedas y que el dólar se está fortaleciendo. Si el índice DXY cae, significa que el valor del dólar estadounidense está disminuyendo en comparación con las otras monedas y que el dólar se está debilitando.</p>",
    fd: "Scraped (XLS)",
    fdr: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
    fu: "BCRA",
    fur: "https://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/ITCRMSerie.xls",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    d: "Este índice mide el precio relativo de los bienes y servicios de la economía argentina con respecto al de los de los principales 12 socios comerciales del país, en función del flujo de comercio de manufacturas.",
 

    dimensions: [
      {
        
        label: "DXY",
        data: payload,
        
        
      },
  
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

