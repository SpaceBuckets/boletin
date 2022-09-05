module.exports = (async function() {

  const parsers = require("../../parsers");
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
    labels: require("./datos/dates.json"),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Turismo Receptivo",
        data: require("./datos/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/turismoreceptivo/data.json', JSON.stringify(post));
   
})()