module.exports = {
  labels: require("../cuentas/subenergia/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Transporte",
      data: require("../cuentas/subtransporte/d.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Energia",
      data: require("../cuentas/subenergia/d.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

