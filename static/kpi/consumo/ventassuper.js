module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ventassuper"
  
  const totales = await parsers.datosGobarAPI(kpi,'totales','455.1_VENTAS_TOTAGO_0_M_25_99')
const efectivo = await parsers.datosGobarAPI(kpi,'efectivo','455.1_EFECTIVOIVO_0_M_8_15')
const debito = await parsers.datosGobarAPI(kpi,'debito','455.1_TARJETAS_DITO_0_M_15_92')
const credito = await parsers.datosGobarAPI(kpi,'credito','455.1_TARJETAS_CITO_0_M_16_85')
const otros = await parsers.datosGobarAPI(kpi,'otros','455.1_OTROS_MEDIIOS_0_M_12_32')

    
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
    cat: "Consumo",
    catslug: "consumo",
    chartdata: {
    labels: totales.dates,
    datasets: [
        {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Totales",
            data: totales.d,
            borderColor: "rgba(46,120,210,1)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Efectivo",
            data: efectivo.d,
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Debito",
            data: debito.d,
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Credito",
            data: credito.d,
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Otros",
            data: otros.d,
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },

    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()