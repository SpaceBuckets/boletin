module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "commodityenergy"
  const kpidata = {
      url: 'https://www.bcsf.com.ar/ces/base-datos/bases/download-public-file/6',
      sheet: 2,
      date: 0,
      items: [{
        name: "commodityenergy",
        id: 1,
      }] 
  }
  

  const payload = await parsers.genericXLS(kpidata)

  var post = {
    kpi,
  t: "Precio Petróleo",
  st: "Incluye petroleo, gas y carbon",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El precio del petróleo es un indicador que muestra el valor de compra y venta de barriles de petróleo crudo en el mercado internacional. El precio del petróleo se determina por la oferta y la demanda en el mercado mundial de petróleo. La oferta es la cantidad de petróleo disponible para la venta y la demanda es la cantidad de petróleo que los compradores desean adquirir.</p><p>El precio del petróleo es influenciado por varios factores, como la oferta y demanda global de petróleo, los niveles de producción de los principales países productores de petróleo, la política energética de los países consumidores de petróleo, las fluctuaciones del tipo de cambio, y los acontecimientos geopolíticos.</p><p>El precio del petróleo es considerado un indicador económico importante porque afecta a la economía global. Los precios altos del petróleo pueden aumentar los costos de producción y transporte, lo que puede resultar en un aumento de precios en otros productos y servicios. También puede afectar la inflación y el crecimiento económico de los países que dependen en gran medida de la importación de petróleo. Por otro lado, los precios bajos del petróleo pueden tener un efecto contrario y beneficiar a las economías que dependen de la exportación de petróleo o que tienen una gran demanda de energía.</p>",
  fdr: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  fd: "Scraped (XLS)",
  fdr: "https://www.bcsf.com.ar/ces/base-datos/bases/download-public-file/6",
  fu: "BCSF",
  fur: "https://www.bcsf.com.ar/",
  frec: "Mensual",   
  dimensions: [
      {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Energy Price Index",
        data: payload.commodityenergy,
        color: "rgba(46,120,210,1)",
        
        
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

