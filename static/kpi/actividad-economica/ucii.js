module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ucii"
    
  const general = await parsers.datosGobarAPI('31.3_UNG_2004_M_18')
  const metales = await parsers.datosGobarAPI("31.3_UIMB_2004_M_33")
  const edicion = await parsers.datosGobarAPI("31.3_UEI_2004_M_22")
  const textiles = await parsers.datosGobarAPI("31.3_UPT_2004_M_23")
  const metalmecanica = await parsers.datosGobarAPI("31.3_UMNIA_2004_M_42")
  const plastico = await parsers.datosGobarAPI("31.3_UCP_2004_M_20")
  const automotriz = await parsers.datosGobarAPI("31.3_UV_2004_M_25")
  const tabaco = await parsers.datosGobarAPI("31.3_UPT_2004_M_21")
  const alimentos = await parsers.datosGobarAPI("31.3_UPAB_2004_M_35")
  const quimicos = await parsers.datosGobarAPI("31.3_USPQ_2004_M_34")
  const petroleo = await parsers.datosGobarAPI("31.3_URP_2004_M_24")
  const papel = await parsers.datosGobarAPI("31.3_UPC_2004_M_17")
  const minerales = await parsers.datosGobarAPI("31.3_UMNM_2004_M_27")
 
  var post = {
    kpi,
    "t": "UCII",
    "st": "Utilización de la Capacidad Instalada en la Industria",
    "sd": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
    "c": "<p>El UCII (Utilización de la Capacidad Instalada de la Industria) es un indicador que mide el nivel de utilización de la capacidad productiva de las empresas manufactureras en Argentina. Este indicador es elaborado y publicado mensualmente por el INDEC.</p><p>El UCII es un indicador importante porque refleja la capacidad productiva de la economía y su capacidad para satisfacer la demanda interna y externa de bienes manufacturados. Además, el nivel de utilización de la capacidad instalada también puede ser un indicador temprano de la actividad económica en general.</p><p>El UCII se calcula mediante una encuesta realizada a un conjunto de empresas manufactureras representativas en Argentina. En esta encuesta, se recopila información sobre la producción actual y la capacidad productiva disponible de las empresas. La capacidad productiva se define como la cantidad de producción que una empresa puede generar con sus instalaciones y equipos en condiciones normales de operación.</p><p>Con esta información, se calcula el nivel de utilización de la capacidad instalada, que se expresa como un porcentaje del total de capacidad productiva disponible. Por ejemplo, si la capacidad productiva total de una empresa es de 100 unidades y está produciendo 80 unidades, entonces su nivel de utilización de la capacidad instalada es del 80%.</p>",
    fd: "datos.gob.ar",
    fdr: "https:/.datos.gob.ar/dataset/sspm_31/archivo/sspm_31.3",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-15",
    frec: "Mensual", 
    "d": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
    chart: {
    dates: general,
    dimensions: [
      {
        label: "General",
        data: general,
        color: "#2E78D2", 
      },
      {
        label: "Alimentos",
        data: alimentos,
        color: "rgba(46,120,210,0.15)", 
        borderWidth: 1,
      },
      {
        label: "Automotriz",
        data: automotriz,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Edicion",
        data: edicion,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Metales",
        data: metales,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      { 
        label: "Metalmecanica",
        data: metalmecanica,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Minerales",
        data: minerales,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Papel",
        data: papel,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Petroleo",
        data: petroleo,
        color: "rgba(46,120,210,0.15)", 
        borderWidth: 1,
      },
      {
        label: "Plastico",
        data: plastico,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Quimicos",
        data: quimicos,
        color: "rgba(46,120,210,0.15)", 
        borderWidth: 1,
      },
      {
        label: "Tabaco",
        data: tabaco,
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      { 
        label: "Textiles",
        data: textiles,
        color: "rgba(46,120,210,0.15)", 
        borderWidth: 1,
      },
    ]
  }
}


parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()

