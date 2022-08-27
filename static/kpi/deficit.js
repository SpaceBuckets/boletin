module.exports = {
  "t": "Déficit Fiscal",
  "st": "Ingresos, Gastos y Ahorro",
  "sd": "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "kpi": "deficit",
  "c": "<p>El concepto de déficit fiscal, déficit presupuestario o déficit público describe la situación en la cual los gastos realizados por el Estado superan a los ingresos no financieros, en un determinado periodo (normalmente un año).</p><p>Cuando se habla de déficit público se está haciendo referencia al déficit del conjunto de las administraciones públicas de un país. Se habla de déficit fiscal en una economía cerrada en situaciones en las que el gobierno no tiene acceso al endeudamiento directo con el público, ni dentro ni fuera del país, y que sus reservas internacionales se han agotado. Por lo tanto, la única opción que le queda es endeudarse con el banco central.</p>",
  "f": "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
  "d": "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  "cat": "Cuentas Nacionales",
  chartdata: {
    labels: require("../data/cuentas/ingresos/dates.json"),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Ingresos",
        data: require("../data/cuentas/ingresos/d.json"),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Gastos",
        data: require("../data/cuentas/gastos/d.json"),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo",
        data: require("../data/cuentas/ahorro/d.json"),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
        type: "bar",
      },
    ],
  }
}

