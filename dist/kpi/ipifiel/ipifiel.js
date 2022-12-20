module.exports = (async function () {

  const parsers = require("../../parsers");
const generatedTime = require(`../../generatedTime.json`)
  const kpi = "ipifiel"

  kpidata = { 
    "url": "http://www.fiel.org/publicaciones/CuadrosIC/CUAD_INDI_1669221056699.xls", 
    "sheet": "0", 
    "date": "0", 
    "items": [{ 
      "name": "estacional", 
      "id": "1" 
    },{ 
      "name": "desestacional", 
      "id": "4" 
    }] 
  }
try {
  await parsers.genericXLS(kpidata, kpi)

  var post = {
    kpi,
    t: "IPI FIEL",
    st: "",
    c: "<p>Este indice mide la evolución mensual de la actividad productiva de las ramas industriales. Es decir, de las industrias extractivas, manufactureras y de producción y distribución de energía eléctrica, agua y gas y; como así también la captación, depuración y distribución de agua. Refleja la evolución conjunta de la cantidad y de la calidad, eliminando la influencia de los precios.</p>",
    fd: "Scraped (XLS)",
    fdr: "http://www.fiel.org/publicaciones/CuadrosIC/CUAD_INDI_1669221056699.xls",
    fu: "FIEL",
    fur: "http://www.fiel.org/",
    frec: "Mensual",   
    d: "",
    min: 80,
    cat: "Actividad Económica",
    chartdata: {
      labels: require(`../../data/${generatedTime}/${kpi}/estacional/dates.json`),
      datasets: [
        {
          backgroundColor: "rgba(46,120,210,0)",
          label: "IPI FIEL",
          data: require(`../../data/${generatedTime}/${kpi}/estacional/d.json`),
          borderColor: "rgba(46,120,210,0.25)",
          pointRadius: 0,
          borderWidth: 1.5,
          },
          {
            backgroundColor: "rgba(46,120,210,0)",
            label: "IPI FIEL",
            data: require(`../../data/${generatedTime}/${kpi}/desestacional/d.json`),
            borderColor: "rgba(46,120,210,1)",
            pointRadius: 0,
            borderWidth: 1.5,
            },          
      ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${generatedTime}/${kpi}/${kpi}.json`, JSON.stringify(post));

} catch (error) {
  console.log('\x1b[41m', '\x1b[37m',`✕ [${kpi}] failed to fetch!` ,'\x1b[0m');
}
})()