module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "correo"
  
    const payload = await parsers.datosGobarAPI('302.3_CORREOS_COS_U_0_S_29')
  const post = {
    kpi,
    t: "Correo Postal",
    st: "",
    c: "<p>El indicador de Correo postal de Argentina hace referencia a la cantidad de envíos postales realizados en el país, tanto en términos de envíos nacionales como internacionales.</p><p>El correo postal es un servicio que permite el envío y recepción de correspondencia, paquetes y otros productos, ya sea de forma nacional o internacional. En Argentina, este servicio es prestado por Correo Argentino, una empresa estatal que tiene como objetivo facilitar la comunicación y el intercambio de bienes entre las personas y empresas del país y del mundo.</p><p>El indicador de Correo postal es importante porque refleja la actividad económica y social del país, así como el grado de integración con el resto del mundo. Por ejemplo, un aumento en la cantidad de envíos postales puede indicar un aumento en la actividad comercial y económica, así como una mayor conexión con otros países a través del comercio y la comunicación.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-estadisticas-servicios-publicos/archivo/sspm_302.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",

    dimensions: [
        {
        
        label: "Correo Postal",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()