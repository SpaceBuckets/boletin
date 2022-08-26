module.exports = {
  labels: require("../ivm/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "IVM",
      data: require("../ivm/valor.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}
