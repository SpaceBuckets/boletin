module.exports = (async function() {

  const parsers = require("../../parsers");
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
  for (let [key, value] of Object.entries(ucii)) {
    await parsers.datosGobarAPI(kpi, key, value)
  }
  var post = {
    kpi,
  "t": "UCII",
  "st": "Utilización de la Capacidad Instalada en la Industria",
  "sd": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  "c": "<p>El indicador de la Utilización de la Capacidad Instalada en la Industria mide la proporción de la capacidad instalada del sector industrial de nuestro país que está siendo actualmente utilizada.</p> <p>Para su cálculo se tiene en cuenta cuál es efectivamente la producción máxima que cada sector puede obtener con la capacidad instalada actual. Se consideran criterios técnicos, como el aprovechamiento potencial de las plantas productivas empleando el máximo de turnos posibles y las paradas necesarias para el mantenimiento apropiado de dicha capacidad.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Actividad Económica",
  chartdata: {
    labels: require("./general/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "General",
        data: require("./general/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Alimentos",
        data: require("./alimentos/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Automotriz",
        data: require("./automotriz/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Edicion",
        data: require("./edicion/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metales",
        data: require("./metales/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metalmecanica",
        data: require("./metalmecanica/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Minerales",
        data: require("./minerales/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Papel",
        data: require("./papel/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Petroleo",
        data: require("./petroleo/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Plastico",
        data: require("./plastico/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Quimicos",
        data: require("./quimicos/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Tabaco",
        data: require("./tabaco/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Textiles",
        data: require("./textiles/d.json"),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
    ]
  }
}


parsers.writeFileSyncRecursive(`./static/kpi/${kpi}/${kpi}.json`, JSON.stringify(post));

})()

