module.exports = (async function() {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "bonosusd"
 

  var post = {
    kpi,
    t: "Bonos USD",
    st: "Bonos Ley Argentina y NY",
    sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    c: "<p>La fabricación del acero es el conjunto de procedimientos necesarios para producir este material a partir de mineral de hierro y/o chatarra. En el proceso, las impurezas como el nitrógeno, el silicio, el fósforo, el azufre y el exceso de carbono (la impureza más importante) se eliminan del hierro obtenido; y además se suelen agregar elementos de aleación como manganeso, níquel, cromo, vanadio y carbono en su caso, para producir diferentes tipos de acero. También es importante limitar los gases disueltos como nitrógeno y oxígeno y las impurezas arrastradas (denominadas 'inclusiones') para garantizar la calidad de los productos fundidos a partir del metal obtenido.</p>",
    f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    cat: "Política Monetaria",
    min: 0,
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/al30d/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL30D",
          data: require(`../../data/${generatedTime}/${kpi}/al30d/d.json`),
          borderColor: "rgba(46,120,210,1)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL29D",
          data: require(`../../data/${generatedTime}/${kpi}/al29d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "AL41D",
          data: require(`../../data/${generatedTime}/${kpi}/al41d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD30D",
          data: require(`../../data/${generatedTime}/${kpi}/gd30d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD35D",
          data: require(`../../data/${generatedTime}/${kpi}/gd35d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
        {
          backgroundColor: "rgba(46,120,210,0.0)",
          label: "GD41D",
          data: require(`../../data/${generatedTime}/${kpi}/gd41d/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
        },
      ],
    }
  }

  
  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));
})()
