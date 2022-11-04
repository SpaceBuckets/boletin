module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "liquisoja"
    
  await parsers.datosGobarAPI(kpi,'datos','349.2_ACUM_MENSUAL__13') 
    
  var post = {
    kpi,
    t: "Liquidacion Agro",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Producción",
    chartdata: {
    labels: require("./datos/dates.json"),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Liquidacion Agro",
        data: require("./datos/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/liquisoja/liquisoja.json', JSON.stringify(post));
   
})()