module.exports = {
  labels: require("../cuentas/pozos/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Pozos de petroleo",
      data: require("../cuentas/pozos/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.75,
    },
  ],
}

