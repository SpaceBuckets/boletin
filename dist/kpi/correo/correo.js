module.exports = (async function() {

  const parsers = require("../../parsers");
  const kpi = "correo"
    
  await parsers.datosGobarAPI(kpi,'datos','302.3_CORREOS_COS_U_0_S_29') 
    
  var post = {
    kpi,
    t: "Correo Postal",
    st: "",
    c: "",
    f: "",
    d: "",
    cat: "Otros",
    chartdata: {
    labels: require("./datos/dates.json"),
    datasets: [
        {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Correo Postal",
        data: require("./datos/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
        },
    ],
    }
  }

  parsers.writeFileSyncRecursive('./static/kpi/correo/correo.json', JSON.stringify(post));
   
})()