module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "turismoreceptivo"
    
  await parsers.datosGobarAPI(kpi,'datos','322.2_TURISMO_REIVO__17') 
    
  var post = {
    kpi,
    t: "Turismo Receptivo",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Turismo",
    chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Turismo Receptivo",
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