module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "potenciamaxima"
  try {
  await parsers.datosGobarAPI(kpi, 'datos', '367.3_POTENCIA_MIMA__15')

  const post = {
    kpi,
    t: "Potencia Maxima",
    st: "Electricidad",
    sd: "",
    c: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ar/dataset/sspm-demanda-electricidad/archivo/sspm_367.3?view_id=57a59dd2-3be4-42c3-9093-a9e8791f5e09",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "",
    cat: "Energia",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/datos/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(146,220,210,0)",
          label: "Potencia Electrica Maxima",
          data: require(`../../data/${generatedTime}/${kpi}/datos/d.json`),
          borderColor: "#2E78D2CC",
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

