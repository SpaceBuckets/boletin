module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "auh"

  try {

  await parsers.datosGobarAPI(kpi, 'datos', '188.1_AUH_ASIGNAADO_0_0_48')

  const post = {
    kpi,
    t: "Asignacion Universal",
    st: "Cantidad de personas",
    sd: "Titulares de derecho de la Asignación Universal por Hijo e Hijo Discapacitado y de la Asignación Universal por Embarazo (AUE). Datos semestrales de beneficios liquidados a junio y diciembre de cada año",
    c: "<p>Titulares de derecho de la Asignación Universal por Hijo e Hijo Discapacitado y de la Asignación Universal por Embarazo (AUE). Datos semestrales de beneficios liquidados a junio y diciembre de cada año</p>",
    d: "",
    cat: "Cuentas Nacionales",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/km/dataset/sspm-politica-ingresos-asignacion-universal-por-hijo-para-proteccion-social-por-embarazo/archivo/sspm_188.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual",    
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "AUH",
          data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
          borderColor: "#2E78D2CC",
          backgroundColor: "#2E78D2CC",
          type: 'bar',
          pointRadius: 0,
          borderWidth: 1.5,
        },

      ]
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

