module.exports = {
  labels: require("../cuentas/gas/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Produccion de Gas",
      data: require("../cuentas/gas/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.75,
    },
  ],
}

