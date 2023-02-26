module.exports = (async function() {
  const fetch = require('@adobe/node-fetch-retry');
  const parsers = require("@parsers");
  
  const kpi = "brecha"

  const data = await (await fetch('https://api.bluelytics.com.ar/v2/evolution.json')).json();

  const valUSD = data.filter(d => d.source === 'Oficial').map(d => d.value_buy);
  const valBlue = data.filter(d => d.source === 'Blue').map(d => d.value_buy);
  const valGap = valUSD.map((num, i) => ((valBlue[i] - num) / ((num + valBlue[i]) / 2)) * 100);
 
  const payload = valGap.map((val, i) => ({ x: data[i].date, y: val })).reverse();
    
  var post = {
    kpi,
    t: "Brecha USD/Peso",
    st: "Gap",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>La brecha entre cotizaciones en Argentina se refiere a la diferencia entre el tipo de cambio oficial y el tipo de cambio paralelo (también conocido como 'dólar blue' o 'dólar informal'). El tipo de cambio oficial es el valor que el gobierno argentino fija para la compra y venta de divisas en el mercado cambiario, mientras que el tipo de cambio paralelo es el valor que se establece en transacciones no reguladas por el gobierno, como el mercado negro.</p><p>La brecha entre cotizaciones puede tener implicaciones significativas para la economía argentina, incluyendo el aumento de los precios de los bienes importados y la caída de las reservas internacionales del país. El gobierno argentino ha implementado diversas medidas para tratar de reducir la brecha, como la eliminación de ciertos impuestos a las exportaciones y la implementación de restricciones al acceso al mercado paralelo. Sin embargo, la brecha sigue siendo un desafío importante para la economía argentina.</p>",
    fd: "API",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    frec: "Diaria", 
    min: 0,
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
        {
          fillColor: "rgba(178,34,34,0.05)",
          label: "Brecha USD / Peso",
          data: payload,
          color: "#b22222CC",
        },
      ],
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()