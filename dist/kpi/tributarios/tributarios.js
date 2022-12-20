module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "tributarios"
  const kpidata = {
    dga: '172.3_SOTAL_DDGA_M_0_0_12',
    dgi: '172.3_SOTAL_DDGI_M_0_0_12',
    total: '172.3_TL_RECAION_M_0_0_17',
    seguridad: '172.3_SRIDAD_IAL_M_0_0_16',
  }
  try {
  for (let [key, value] of Object.entries(kpidata)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  t: "Ingresos Tributarios",
  st: "Impuestos y subcategorias",
  sd: "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  c: "<p>Ingresos tributarios: son los originados en la potestad que tiene el Estado de establecer gravámenes (impuestos sobre la renta, sobre el patrimonio, sobre la producción, venta, compra o utilización de bienes y servicios que se cargan a los costos de producción y/o comercialización).</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/sv/dataset/sspm-principales-subgrupos-recaudacion-tributaria/archivo/sspm_172.3",
  fu: "MECON",
  fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
  frec: "Mensual", 
  d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  cat: "Cuentas Nacionales",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/total/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Total",
        data: require(`../../data/${generatedTime}/${kpi}//total/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "DGA",
        data: require(`../../data/${generatedTime}/${kpi}//dga/d.json`),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "DGI",
        data: require(`../../data/${generatedTime}/${kpi}//dgi/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Seguridad Social",
        data: require(`../../data/${generatedTime}/${kpi}//seguridad/d.json`),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
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
