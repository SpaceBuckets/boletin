module.exports = {
  labels: require("../monetaria/tasas/tasadates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Referencia",
      data: require("../monetaria/tasas/tasatasa.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Badlar",
      data: require("../monetaria/tasas/tasabadlar.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Plazo Fijo",
      data: require("../monetaria/tasas/tasaplazo.json"),
      borderColor: "rgba(46,120,210,0.25)",
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Pases Pasivos (1d)",
      data: require("../monetaria/tasas/tasapases.json"),
      borderColor: "#7a49a580",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

