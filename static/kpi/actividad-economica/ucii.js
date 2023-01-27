module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ucii"
    
    const general = await parsers.datosGobarAPI(kpi, 'general', '31.3_UNG_2004_M_18')
    const metales = await parsers.datosGobarAPI(kpi, 'metales', "31.3_UIMB_2004_M_33")
    const edicion = await parsers.datosGobarAPI(kpi, 'edicion',  "31.3_UEI_2004_M_22")
    const textiles = await parsers.datosGobarAPI(kpi, 'textiles', "31.3_UPT_2004_M_23")
    const metalmecanica = await parsers.datosGobarAPI(kpi, 'metalmecanica', "31.3_UMNIA_2004_M_42")
    const plastico = await parsers.datosGobarAPI(kpi, 'plastico', "31.3_UCP_2004_M_20")
    const automotriz = await parsers.datosGobarAPI(kpi, 'automotriz',  "31.3_UV_2004_M_25")
    const tabaco = await parsers.datosGobarAPI(kpi, 'tabaco', "31.3_UPT_2004_M_21")
    const alimentos = await parsers.datosGobarAPI(kpi, 'alimentos',  "31.3_UPAB_2004_M_35")
    const quimicos = await parsers.datosGobarAPI(kpi, 'quimicos', "31.3_USPQ_2004_M_34")
    const petroleo = await parsers.datosGobarAPI(kpi, 'petroleo', "31.3_URP_2004_M_24")
    const papel = await parsers.datosGobarAPI(kpi, 'papel', "31.3_UPC_2004_M_17")
    const minerales = await parsers.datosGobarAPI(kpi, 'minerales', "31.3_UMNM_2004_M_27")
 
  var post = {
    kpi,
  "t": "UCII",
  "st": "Utilización de la Capacidad Instalada en la Industria",
  "sd": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  "c": "<p>El indicador de la Utilización de la Capacidad Instalada en la Industria mide la proporción de la capacidad instalada del sector industrial de nuestro país que está siendo actualmente utilizada. Para su cálculo se tiene en cuenta cuál es efectivamente la producción máxima que cada sector puede obtener con la capacidad instalada actual.</p>",
  fd: "datos.gob.ar",
  fdr: "https:/.datos.gob.ar/dataset/sspm_31/archivo/sspm_31.3",
  fu: "INDEC",
  fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-15",
  frec: "Mensual", 
  "d": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  chartdata: {
    labels: general.dates,
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "General",
        data: general.d,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Alimentos",
        data: alimentos.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Automotriz",
        data: automotriz.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Edicion",
        data: edicion.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metales",
        data: metales.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Metalmecanica",
        data: metalmecanica.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Minerales",
        data: minerales.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Papel",
        data: papel.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Petroleo",
        data: petroleo.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Plastico",
        data: plastico.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Quimicos",
        data: quimicos.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Tabaco",
        data: tabaco.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Textiles",
        data: textiles.d,
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
    ]
  }
}


parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

