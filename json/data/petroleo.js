module.exports = {
  labels: require("../cuentas/petroleo/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0.05)",
      label: "Pozos de petroleo",
      data: require("../cuentas/petroleo/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,

      borderWidth: 1.5,
    },
  ],
}

