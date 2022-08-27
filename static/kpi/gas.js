module.exports = {
  "t": "Producción de Gas",
  "st": "En millones de BTU",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "kpi": "gas",
  "c": "<p>El gas natural (a veces denominado gas fósil) es un hidrocarburo mezcla de gases ligeros de origen natural. Principalmente contiene metano, normalmente incluye cantidades variables de otros alcanos y a veces un pequeño porcentaje de dióxido de carbono, nitrógeno, ácido sulfhídrico y helio. Se forma cuando varias capas de plantas en descomposición y materia animal se exponen a calor intenso y presión bajo la superficie de la Tierra durante millones de años. La energía que inicialmente obtienen las plantas del sol se almacena en forma de enlaces químicos en el gas. Constituye una importante fuente de energía fósil liberada por su combustión. Se extrae de yacimientos independientes (gas no asociado) o junto a yacimientos petrolíferos o de carbón (gas asociado a otros hidrocarburos y gases).</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "max": 6000,
  "cat": "Producción",
  chartdata: {
    labels: require("../data/cuentas/gas/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "Produccion de Gas",
        data: require("../data/cuentas/gas/d.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

