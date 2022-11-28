module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "cvs"
    
  await parsers.datosGobarAPI(kpi,'datos','447.1_TOTALTAL_0_0_5_37') 
    
  var post = {
    kpi,
    t: "Coeficiente de Variacion Salarial",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Salarios",
    chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Coeficiente de Variacion Salarial",
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