module.exports = {
  labels: require("../embi/dates.json"),
  datasets: [
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "EMBI Brasil",
      data: require("../embi/brasil.json"),
      borderColor: "rgba(46,120,210,0.3)",

      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "EMBI Chile",
      data: require("../embi/chile.json"),
      borderColor: "rgba(46,120,210,0.3)",

      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "EMBI Colombia",
      data: require("../embi/colombia.json"),
      borderColor: "rgba(46,120,210,0.3)",

      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "EMBI Mexico",
      data: require("../embi/mexico.json"),
      borderColor: "rgba(46,120,210,0.3)",

      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: 'rgba(46,120,210,0)',
      label: "EMBI Latino",
      data: require("../embi/latino.json"),
      borderColor: "#7a49a580",

      pointRadius: 0,
      borderWidth: 1,
    },
    {
      backgroundColor: 'rgba(146,220,210,0)',
      label: "EMBI Argentina",
      data: require("../embi/argentina.json"),
      borderColor: "#2E78D2",
      pointRadius: 0,
      borderWidth: 1.5,

    }

  ],
}

