module.exports = {
  labels: require("../cuentas/ingresos/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Ingresos",
      data: require("../cuentas/ingresos/d.json"),
      borderColor: "#009966",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Gastos",
      data: require("../cuentas/gastos/d.json"),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      backgroundColor: "#ccc",
      label: "Saldo",
      data: require("../cuentas/ahorro/d.json"),
      borderColor: "#ccc",
      pointRadius: 0,
      borderWidth: 0,
      type: "bar",
    },
  ],
}

