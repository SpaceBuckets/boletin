module.exports = {
  "t": "Subsidios Económicos",
  "st": "Energía y Transporte",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "kpi": "subsidios",
  "c": "<p>El subsidio es una ayuda extraordinaria por parte de la Administración Pública para estimular la demanda de un bien o proteger a un colectivo. En economía, los subsidios son ayuda que los poderes públicos otorgan a determinados ciudadanos, principalmente, con el fin de brindar acceso a los bienes y servicios básicos.</p><p>El Estado cubre, en promedio, más del 70% del costo de la energía que llega a los hogares. En el esquema aplicado hasta junio de 2022, el subsidio alcanzaba incluso a los sectores de mayores ingresos que no necesitaban del acompañamiento del Estado.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 250000,
  "cat": "Cuentas Nacionales",
  chartdata: {
    labels: require("../data/cuentas/subenergia/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: require("../data/cuentas/subtransporte/d.json"),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Energia",
        data: require("../data/cuentas/subenergia/d.json"),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

