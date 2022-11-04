module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "depositosprivados"
    
  await parsers.datosGobarAPI(kpi,'datos','90.1_DET_DESAGRIV_0_0_38') 
    
  var post = {
    kpi,
    t: "Depositos privados",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Sector Financiero",
    chartdata: {
    labels: require("./datos/dates.json"),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Depositos privados",
        data: require("./datos/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/depositosprivados/depositosprivados.json', JSON.stringify(post));
   
})()