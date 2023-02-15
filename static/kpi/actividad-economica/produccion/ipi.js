module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "ipi"
  const estacional = await parsers.datosGobarAPI('453.1_SERIE_DESEADA_0_0_24_58')
  const tendencia = await parsers.datosGobarAPI('453.1_SERIE_TENDCLO_0_0_21_61')
  const base = await parsers.datosGobarAPI('453.1_SERIE_ORIGNAL_0_0_14_46')

  var post = {
    kpi,
    t: "IPI",
    st: "Índice de Producción Industrial Manufacturero",
    sd: "Este indicador incluye un exhaustivo relevamiento de todas las <em>actividades económicas que conforman la industria manufacturera</em>, con cobertura para el total del país.",
    c: "<p>El Índice de Producción Industrial Manufacturero (IPI) se calcula a partir de las variables de producción, ventas, utilización de insumos, consumo, cantidad de horas trabajadas del personal y ventas a precios corrientes.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm-indice-actividad-economica-manufacturero-ipi/archivo/sspm_453.1",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-14",
    frec: "Mensual", 
    d: "El Índice de Producción Industrial Manufacturero (IPI) se calcula a partir de las variables de producción, ventas, utilización de insumos, consumo, cantidad de horas trabajadas del personal y ventas.",
    min: 60,
    max: 160,
    cat: "Actividad Económica",
    catslug: "actividad-economica",  
    chart: {
      dates:base,
      dimensions: [
        {
          label: "Desestacionalizado",
          data: estacional,
          color: "#2E78D2", 
        },
        {
          label: "Tendencia",
          data: tendencia,
          color: "#7a49a580", 
        },
        {
          label: "Base",
          data: base,
          color: "rgba(46,120,210,0.25)",
        },
      ]
    }
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));

})()
