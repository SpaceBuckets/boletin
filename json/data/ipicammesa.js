module.exports = {
  labels: require("../ipicammesa/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "IPI CAMMESA",
      data: require("../ipicammesa/interanual.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
}
