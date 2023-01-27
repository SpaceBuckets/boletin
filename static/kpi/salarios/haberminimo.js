module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "haberminimo"
   
  const payload = await parsers.datosGobarAPI(kpi, "haberminimo", '58.1_MP_0_M_24')

  var post = {
    kpi,
  t: "Haber Minimo Jubilatorio",
  st: "Remuneración imponible promedio de los trabajadores estables",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>Jubilación es el acto administrativo por el que un trabajador en activo, por cuenta propia o ajena, solicita pasar a una situación pasiva o de inactividad laboral tras haber alcanzado la edad legal para ello. También, se puede originar por enfermedad crónica grave o incapacidad. Después de su resolución favorable, el interesado obtiene una prestación económica vitalicia. La legislación laboral de cada país estipula condiciones distintas al respecto.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm-haber-minimo-jubilatorio-pesos-corrientes/archivo/sspm_58.1",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",

  max: 50000,
  chartdata: {
    labels: payload.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Haber Minimo Jubilatorio",
        data: payload.d,
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
]
}
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()