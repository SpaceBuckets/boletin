module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "potenciamaxima"
  const payload = await parsers.datosGobarAPI('367.3_POTENCIA_MIMA__15')
  const post = {
    kpi,
    t: "Potencia Maxima",
    st: "Electricidad",
    sd: "",
    c: "<p>El indicador de potencia máxima de electricidad en Argentina hace referencia a la capacidad máxima de generación eléctrica que puede ser demandada por el Sistema Argentino de Interconexión (SADI) en un momento determinado. Este indicador se mide en megavatios (MW) y es importante porque permite conocer la capacidad que tiene el sistema para abastecer la demanda de energía eléctrica en momentos de mayor consumo.</p><p>El operador del mercado eléctrico mayorista en Argentina, CAMMESA, es el encargado de monitorear la demanda y la oferta de energía eléctrica en el país y realizar las operaciones necesarias para garantizar el abastecimiento del sistema. Para ello, CAMMESA utiliza diferentes herramientas, como la programación de la oferta y la demanda, la gestión de la reserva fría y la activación de la reserva estratégica, entre otras.</p><p>La potencia máxima demandada en Argentina varía a lo largo del año, siendo los meses de verano los de mayor consumo debido al uso intensivo de aires acondicionados y ventiladores. Por lo tanto, el seguimiento de este indicador es fundamental para prevenir posibles cortes de energía eléctrica y garantizar un suministro confiable y seguro para los consumidores.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-demanda-electricidad/archivo/sspm_367.3?view_id=57a59dd2-3be4-42c3-9093-a9e8791f5e09",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
          label: "Potencia Electrica Maxima",
          data: payload,
          
        },
      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

