module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "ventassuper"
    
  await parsers.datosGobarAPI(kpi,'Totales','455.1_VENTAS_TOTAGO_0_M_25_99')
await parsers.datosGobarAPI(kpi,'Efectivo','455.1_EFECTIVOIVO_0_M_8_15')
await parsers.datosGobarAPI(kpi,'Debito','455.1_TARJETAS_DITO_0_M_15_92')
await parsers.datosGobarAPI(kpi,'Credito','455.1_TARJETAS_CITO_0_M_16_85')
await parsers.datosGobarAPI(kpi,'Otros','455.1_OTROS_MEDIIOS_0_M_12_32')

    
  var post = {
    kpi,
    t: "Ventas Supermercados",
    st: "Medios de Pago",
    c: "",
    f: "",
    fu: "",
    d: "",
    cat: "Consumo",
    chartdata: {
    labels: require("./Totales/dates.json"),
    datasets: [
        {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Totales",
            data: require("./Totales/d.json"),
            borderColor: "rgba(46,120,210,1)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Efectivo",
            data: require("./Efectivo/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Debito",
            data: require("./Debito/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Credito",
            data: require("./Credito/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Otros",
            data: require("./Otros/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },

    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/ventassuper/ventassuper.json', JSON.stringify(post));
   
})()