module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ventassuper"
    const payload = await parsers.datosGobarAPI('455.1_VENTAS_TOTAGO_0_M_25_99')
  const post = {
    kpi,
    t: "Ventas Supermercados",
    st: "Medios de Pago",
    c: "<p>El indicador de Ventas totales en supermercados de Argentina mide la cantidad de ventas que se realizan en supermercados del país en un determinado periodo de tiempo. Estas ventas se desglosan por canal de venta (hipermercados, supermercados, etc.), medio de pago (efectivo, tarjeta de crédito, débito, etc.) y grupos de artículos (alimentos, bebidas, productos de limpieza, etc.).</p><p>Este indicador es relevante porque los supermercados son uno de los principales canales de distribución de bienes de consumo masivo en Argentina y las ventas que se realizan en ellos pueden dar una idea del nivel de consumo y de la demanda de distintos productos por parte de los consumidores.</p><p>La evolución por canal de venta permite analizar la distribución de las ventas en distintos tipos de supermercados, mientras que la evolución por medio de pago permite analizar los cambios en los hábitos de pago de los consumidores. Por último, la evolución por grupos de artículos permite identificar los sectores de mayor y menor crecimiento en términos de ventas.</p><p>Es importante tener en cuenta que este indicador se refiere exclusivamente a las ventas realizadas en supermercados y no incluye las ventas realizadas en otros tipos de establecimientos comerciales, como almacenes, ferias, tiendas de conveniencia, etc.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_455/archivo/sspm_455.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
            label: "Totales",
            data: payload,
            color: "rgba(46,120,210,1)",
            },
        {    
            label: "Efectivo",
            data: await parsers.datosGobarAPI('455.1_EFECTIVOIVO_0_M_8_15'),
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Debito",
            data: await parsers.datosGobarAPI('455.1_TARJETAS_DITO_0_M_15_92'),
            color: "rgba(46,120,210,0.25)",   
            },
        {   
            label: "Credito",
            data: await parsers.datosGobarAPI('455.1_TARJETAS_CITO_0_M_16_85'),
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Otros",
            data: await parsers.datosGobarAPI('455.1_OTROS_MEDIIOS_0_M_12_32'),
            color: "rgba(46,120,210,0.25)",   
            },

    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()