module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ventasshopping"
  const payload = await parsers.datosGobarAPI('458.1_VENTAS_TOTTES_ABRI_M_33_40')

  const post = {
    kpi,
    t: "Ventas Shopping",
    st: "Total, GBA y Resto",
    c: "<p>El indicador de Ventas Totales Nacionales en Centros de Compras de Argentina hace referencia al valor total de las ventas realizadas en centros de compras o shoppings, a lo largo de todo el país, en un determinado período de tiempo. Los datos provienen del relevamiento mensual de ventas que realiza la Secretaría de Comercio Interior, que incluye tanto a grandes como a pequeños establecimientos comerciales.</p><p>Este indicador es importante ya que las ventas en centros de compras pueden ser un indicador temprano del comportamiento del consumo en la economía, debido a que estos establecimientos suelen agrupar a diversas empresas y rubros, por lo que se puede obtener una visión más amplia y diversa del comportamiento del mercado. Además, las ventas en centros de compras pueden influir en el comportamiento de la producción y el empleo en el sector comercial y en otros sectores de la economía.</p><p>Es importante destacar que el valor de las ventas en centros de compras puede verse influenciado por diversos factores, como la situación económica del país, la estacionalidad, las promociones y descuentos que se realicen en los establecimientos, entre otros. Por lo tanto, este indicador debe ser interpretado en conjunto con otros indicadores económicos y sociales para obtener una visión más completa del comportamiento del mercado y del consumo en Argentina.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-ventas-centros-compras-nacional/archivo/sspm_458.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
            label: "Total",
            data: payload,
            color: "rgba(46,120,210,1)",
            },
        {    
            label: "GBA",
            data: await parsers.datosGobarAPI('458.1_VENTAS_GBATES_ABRI_M_29_80'),
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Resto",
            data: await parsers.datosGobarAPI('458.1_VENTAS_RESTES_ABRI_M_31_8'),
            color: "rgba(46,120,210,0.25)",
            },

    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()