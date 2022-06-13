module.exports = {
  labels: require("../monetaria/blue/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(0,153,102,0.05)",
      label: "Cambio Oficial",
      data: require("../monetaria/blue/usd.json"),
      borderColor: "#009966",
      pointRadius: 0,
      borderWidth: 1.75,
      //fill: "-1", //fill until previous dataset

    },
    {
      backgroundColor: "rgba(178,34,34,0.05)",
      label: "Cambio Blue",
      data: require("../monetaria/blue/blue.json"),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.75,
      fill: "-1", //fill until previous dataset
    },
  ],
}

