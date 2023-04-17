module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ferrocargas"
      const payload = await parsers.datosGobarAPI('302.3_TRANSP_CAR_KM_0_S_36')
  const post = {
    kpi,
    t: "Cargas Ferrocarril",
    st: "",
    c: "<p>El transporte de carga ferroviario es una forma importante de transportar mercancías en Argentina, ya que permite el traslado de grandes cantidades de carga a través de largas distancias a un costo menor que otros medios de transporte.</p><p>Este indicador es relevante porque la cantidad de carga transportada por ferrocarril puede ser una indicación de la actividad económica del país, especialmente en sectores como la agricultura y la minería, que son importantes exportadores de productos y utilizan el transporte ferroviario para trasladar sus mercancías.</p><p>El indicador se mide en miles de toneladas transportadas y kilómetros recorridos por los servicios ferroviarios. Los datos se recopilan y publican por organismos como el Instituto Nacional de Estadística y Censos (INDEC) y el Ministerio de Transporte de la Nación.</p><p>La evolución de este indicador puede ser afectada por varios factores, como cambios en la demanda de los sectores productivos que utilizan el transporte ferroviario, mejoras en la infraestructura ferroviaria y políticas gubernamentales que promueven o desalientan el uso de este medio de transporte.</p>",
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
        
        label: "Cargas Ferrocarril",
        data: payload,
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()