module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "ventasshopping"
    
  await parsers.datosGobarAPI(kpi,'total','458.1_VENTAS_TOTTES_ABRI_M_33_40 ')
await parsers.datosGobarAPI(kpi,'GBA','458.1_VENTAS_GBATES_ABRI_M_29_80')
await parsers.datosGobarAPI(kpi,'resto','458.1_VENTAS_RESTES_ABRI_M_31_8')

    
  var post = {
    kpi,
    t: "Ventas Shopping",
    st: "Total, GBA y Resto",
    c: "",
    f: "",
    fu: "",
    d: "",
    cat: "Consumo",
    chartdata: {
    labels: require("./total/dates.json"),
    datasets: [
        {
            backgroundColor: "rgba(46,120,210,0)",
            label: "Total",
            data: require("./total/d.json"),
            borderColor: "rgba(46,120,210,1)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "GBA",
            data: require("./GBA/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },
{
            backgroundColor: "rgba(46,120,210,0)",
            label: "Resto",
            data: require("./resto/d.json"),
            borderColor: "rgba(46,120,210,0.25)",
            pointRadius: 0,
            borderWidth: 1.5,
            },

    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/ventasshopping/ventasshopping.json', JSON.stringify(post));
   
})()