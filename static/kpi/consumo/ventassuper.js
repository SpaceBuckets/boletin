module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ventassuper"
  
  const totales = await parsers.datosGobarAPI('455.1_VENTAS_TOTAGO_0_M_25_99')
  const efectivo = await parsers.datosGobarAPI('455.1_EFECTIVOIVO_0_M_8_15')
  const debito = await parsers.datosGobarAPI('455.1_TARJETAS_DITO_0_M_15_92')
  const credito = await parsers.datosGobarAPI('455.1_TARJETAS_CITO_0_M_16_85')
  const otros = await parsers.datosGobarAPI('455.1_OTROS_MEDIIOS_0_M_12_32')

    
  var post = {
    kpi,
    t: "Ventas Supermercados",
    st: "Medios de Pago",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_455/archivo/sspm_455.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    chart: {
    dates:totales,
    dimensions: [
        {
            label: "Totales",
            data: totales,
            color: "rgba(46,120,210,1)",
            },
        {    
            label: "Efectivo",
            data: efectivo,
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Debito",
            data: debito,
            color: "rgba(46,120,210,0.25)",   
            },
        {   
            label: "Credito",
            data: credito,
            color: "rgba(46,120,210,0.25)",   
            },
        {    
            label: "Otros",
            data: otros,
            color: "rgba(46,120,210,0.25)",   
            },

    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()