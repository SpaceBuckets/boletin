module.exports = {
  labels: require("../impo/dolar/dates.json"),
  datasets: [
    {
      backgroundColor: "rgba(46,120,210,0)",
      label: "Importaciones",
      data: require("../impo/dolar/d.json"),
      borderColor: "#b22222CC",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      backgroundColor: "rgba(146,220,210,0)",
      label: "Exportaciones",
      data: require("../expo/dolar/d.json"),
      borderColor: "#009966",
      pointRadius: 0,
      borderWidth: 1.75,
    },
    {
      backgroundColor: "#ccc",
      label: "Saldo Comercial",
      type: "bar",
      data: require("../expo/saldo/d.json"),
      borderColor: "#ccc",
      pointRadius: 0,
      borderWidth: 0,
    },
  ],
}

