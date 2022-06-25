module.exports = {
  labels: require("../cuentas/hierro/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Transporte",
      data: require("../cuentas/hierro/d.json"),
      borderColor: "rgba(46,120,210,1)",
      pointRadius: 0,
      borderWidth: 1.5,
    },

  ],
}