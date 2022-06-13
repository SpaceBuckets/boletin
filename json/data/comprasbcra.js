//const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');
module.exports = {
  labels: require("../reservas/diariadates.json"),
  datasets: [
    {
      backgroundColor: "",
      label: "Compras Divisas USD",
      data: require("../reservas/diaria.json"),
      barThickness: 1,
      pointRadius: 0,
    },
  ],
}

