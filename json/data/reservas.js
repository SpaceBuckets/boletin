module.exports = {
  labels: require("../bcra/reservas/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0.1)',
      label: "Reservas Internacionales",
      data: require("../bcra/reservas/d.json"),
      borderColor: '#2E78D2',
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}

