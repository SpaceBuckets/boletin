module.exports = {

  labels: require("../monetaria/blue/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(178,34,34,0.05)",
      label: "Brecha USD / Peso",
      data: require("../monetaria/blue/gap.json"),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.75,
    },
  ],
}
