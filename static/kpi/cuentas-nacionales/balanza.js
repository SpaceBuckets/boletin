module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "balanza"
  
  const impo = await parsers.datosGobarAPI('74.3_IIT_0_M_25')
  const expo = await parsers.datosGobarAPI('74.3_IET_0_M_16')
  const saldo = await parsers.datosGobarAPI('74.3_ISC_0_M_19')

  var post = {
    kpi,
    t: "Intercambio Comercial",
    st: "Importaciones, Exportaciones y Saldo",
    sd: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares de las exportaciones y los gastos de las importaciones.",
    c: "<p>Las estadísticas del comercio exterior se elaboran principalmente sobre la base de los registros aduaneros (permisos de embarque para las exportaciones y despachos de importación para las importaciones). Para completar la cobertura, se utilizan encuestas a entes binacionales de producción de energía eléctrica, gas y a empresas de transporte marítimo y aéreo como única fuente de información complementaria.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/ja/dataset/sspm-intercambio-comercial-argentino/archivo/sspm_74.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Mensual", 
    d: "El intercambio comercial argentino (ICA) muestra la evolución de la balanza comercial, la relación entre los ingresos en dólares provenientes de los productos que exporta el país y aquellos artículos que se compran en el exterior.",
    chart: {
      dates:impo,
      dimensions: [
      {
        label: "Importaciones",
        data: impo,
        color: "#b22222CC",

      },
      {
        label: "Exportaciones",
        data: expo,
        color: "#009966",

      },
      {
        fillColor: "#ccc",
        label: "Saldo Comercial",
        type: "bar",
        data: saldo,
        color: "#ccc",
        //borderWidth: 0,
      },
    ],
  },
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()