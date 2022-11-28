module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ferrocargas"
    
  await parsers.datosGobarAPI(kpi,'datos','302.3_TRANSP_CAR_KM_0_S_36') 
    
  var post = {
    kpi,
    t: "Cargas Ferrocarril",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Producción",
    chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Cargas Ferrocarril",
        data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));
   
})()