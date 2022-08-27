module.exports = {
  "t": "Energy Price Index",
  "st": "Incluye petroleo, gas y carbon",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "kpi": "commodityenergy",
  "c": "<p>La Unidad de Valor Adquisitivo UVA equivale a la milésima parte del costo promedio de construcción de un metro cuadrado de vivienda. El valor se actualiza diariamente en función a la variación del CER (Coeficiente de Estabilización de Referencia), basado en el índice de precios al consumidor. El valor de la UVA en pesos se publica en el Banco Central de la República Argentina.</p><p>De esta forma, la estrategia detrás de las UVA consiste en que la misma se ajuste a la evolución del costo de construcción. Es decir, la UVA se indexa a alguna variable que refleje la evolución de los precios del sector que genera la necesidad de tomar créditos hipotecarios. La finalidad que se persigue es la de expresar los precios de transacciones de largo plazo en moneda local (el peso), para desacoplarlas de las variaciones de una extranjera (el dólar). La dificultad es que el flujo de ingresos de los potenciales tomadores de crédito, se encuentran expresados en pesos y, por tanto, no necesariamente ajustan a la misma velocidad o nivel que la UVA.</p><p>Asimismo, dado que el CER se calcula de forma diaria y el IPC (Índice de Precios al Consumidor) de forma mensual (y desfasada); el primero es un tipo de proyección geométrica del IPC que calcula el BCRA. Finalmente, el IPC se encuentra en función de la variación de precios de una canasta de bienes y servicios representativa de la población, estimada por el INDEC.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Política Monetaria",
  chartdata: {
    labels: require("../data/commodityenergy/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0.05)",
        label: "UVA",
        data: require("../data/commodityenergy/valor.json"),
        borderColor: "rgba(46,120,210,1)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}