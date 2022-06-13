module.exports = {
  labels: require("../ice/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "ICE Coyuntural",
      data: require("../ice/coyuntural.json"),
      borderColor: "rgba(46,120,210,0.3)",

      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      backgroundColor: 'rgba(146,220,210,0)',
      label: "ICE Estructural",
      data: require("../ice/estructural.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.75,

    },

  ],
}

