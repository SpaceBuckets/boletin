module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ucii"
  const ucii = {
    general: '31.3_UNG_2004_M_18',
    metales: "31.3_UIMB_2004_M_33",
    edicion: "31.3_UEI_2004_M_22",
    textiles: "31.3_UPT_2004_M_23",
    metalmecanica: "31.3_UMNIA_2004_M_42",
    plastico: "31.3_UCP_2004_M_20",
    automotriz: "31.3_UV_2004_M_25",
    tabaco: "31.3_UPT_2004_M_21",
    alimentos: "31.3_UPAB_2004_M_35",
    quimicos: "31.3_USPQ_2004_M_34",
    petroleo: "31.3_URP_2004_M_24",
    papel: "31.3_UPC_2004_M_17",
    minerales: "31.3_UMNM_2004_M_27",
  }
  try {
  for (let [key, value] of Object.entries(ucii)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  "t": "UCII",
  "st": "Utilización de la Capacidad Instalada en la Industria",
  "sd": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  "c": "<p>El indicador de la Utilización de la Capacidad Instalada en la Industria mide la proporción de la capacidad instalada del sector industrial de nuestro país que está siendo actualmente utilizada. Para su cálculo se tiene en cuenta cuál es efectivamente la producción máxima que cada sector puede obtener con la capacidad instalada actual.</p>",
  fd: "datos.gob.ar",
  fdr: "https://datos.gob.ar/dataset/sspm_31/archivo/sspm_31.3",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-15",
  frec: "Mensual", 
  "d": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  "cat": "Actividad Económica",
  chartdata: {
    labels: require(`../../data/${generatedTime}/${kpi}/general/dates.json`),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "General",
        data: require(`../../data/${generatedTime}/${kpi}/general/d.json`),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Alimentos",
        data: require(`../../data/${generatedTime}/${kpi}/alimentos/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Automotriz",
        data: require(`../../data/${generatedTime}/${kpi}/automotriz/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Edicion",
        data: require(`../../data/${generatedTime}/${kpi}/edicion/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metales",
        data: require(`../../data/${generatedTime}/${kpi}/metales/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metalmecanica",
        data: require(`../../data/${generatedTime}/${kpi}/metalmecanica/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Minerales",
        data: require(`../../data/${generatedTime}/${kpi}/minerales/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Papel",
        data: require(`../../data/${generatedTime}/${kpi}/papel/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Petroleo",
        data: require(`../../data/${generatedTime}/${kpi}/petroleo/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Plastico",
        data: require(`../../data/${generatedTime}/${kpi}/plastico/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Quimicos",
        data: require(`../../data/${generatedTime}/${kpi}/quimicos/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Tabaco",
        data: require(`../../data/${generatedTime}/${kpi}/tabaco/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Textiles",
        data: require(`../../data/${generatedTime}/${kpi}/textiles/d.json`),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
    ]
  }
}


parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()

