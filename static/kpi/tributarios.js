module.exports = {
  "t": "Ingresos Tributarios",
  "st": "Impuestos y subcategorias",
  "sd": "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
  "kpi": "tributarios",
  "c": "<p>Ingresos tributarios: son los originados en la potestad que tiene el Estado de establecer gravámenes (impuestos sobre la renta, sobre el patrimonio, sobre la producción, venta, compra o utilización de bienes y servicios que se cargan a los costos de producción y/o comercialización).</p> <p>El sistema tributario es el conjunto de tributos establecidos en el país que responde a principios económicos y políticos en un contexto económico-social determinado y que contribuye a conseguir el óptimo bienestar social de la población. Según la Constitución Nacional en el país existen tres niveles de gobierno: Nacional, Provincial y Municipal. Cada nivel posee la facultad jurídica de exigir contribuciones respecto a las personas o bienes que se haya en su jurisdicción.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Cuentas Nacionales",
  chartdata: {
    labels: require("../data/tributarios/total/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Total",
        data: require("../data/tributarios/total/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "DGA",
        data: require("../data/tributarios/dga/d.json"),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "DGI",
        data: require("../data/tributarios/dgi/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Seguridad Social",
        data: require("../data/tributarios/seguridad/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}
