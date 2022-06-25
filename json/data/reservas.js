module.exports = {
  labels: require("../reservas/diariadates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0.1)',
      label: "Reservas Internacionales",
      data: require("../reservas/total.json"),
      borderColor: '#2E78D2',
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

