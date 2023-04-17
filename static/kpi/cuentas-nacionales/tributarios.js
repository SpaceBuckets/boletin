module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "tributarios"
 const payload = await parsers.datosGobarAPI('172.3_TL_RECAION_M_0_0_17')
  const post = {
    kpi,
    t: "Ingresos Tributarios",
    st: "Impuestos y subcategorias",
    sd: "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
    c: "<p>Los ingresos tributarios son los recursos que el Estado argentino obtiene por concepto de impuestos, tasas y contribuciones que gravan la renta, el consumo, el patrimonio y otros bienes o servicios. Estos recursos son fundamentales para el financiamiento del gasto público, ya que permiten al Estado cubrir los costos asociados con la provisión de bienes y servicios públicos.</p><p>En Argentina, los ingresos tributarios son gestionados por la Administración Federal de Ingresos Públicos (AFIP), que es el organismo encargado de recaudar los impuestos y contribuciones de carácter nacional. Entre los principales tributos que se recaudan en Argentina se encuentran el Impuesto a las Ganancias, el Impuesto al Valor Agregado (IVA), el Impuesto a los Bienes Personales, entre otros.</p><p>Además de los tributos nacionales, existen tributos provinciales y municipales que también generan ingresos para los gobiernos locales. Estos tributos incluyen, por ejemplo, el Impuesto Inmobiliario, el Impuesto a los Ingresos Brutos y la Tasa de Servicios Urbanos.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/sv/dataset/sspm-principales-subgrupos-recaudacion-tributaria/archivo/sspm_172.3",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    dimensions: [
      {
        label: "Total",
        data: payload,
        

      },
      {
        label: "DGA",
        data: await parsers.datosGobarAPI('172.3_SOTAL_DDGA_M_0_0_12'),
        color: "#7a49a580",

      },
      {
        label: "DGI",
        data: await parsers.datosGobarAPI('172.3_SOTAL_DDGI_M_0_0_12'),
        color: "rgba(46,120,210,0.25)",

      },
      {
        label: "Seguridad Social",
        data: await parsers.datosGobarAPI('172.3_SRIDAD_IAL_M_0_0_16'),
        color: "rgba(46,120,210,0.25)",
      },
]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()
