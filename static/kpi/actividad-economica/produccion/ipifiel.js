module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "ipifiel"

  kpidata = { 
    "url": "http://www.fiel.org/publicaciones/CuadrosIC/CUAD_INDI_1671639236948.xls", 
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

  const payload = await parsers.genericXLS(kpidata)

  var post = {
    kpi,
    t: "IPIF",
    st: "Fundación FIEL",
    c: "<p>Este indice mide la evolución mensual de la actividad productiva de las ramas industriales. Es decir, de las industrias extractivas, manufactureras y de producción y distribución de energía eléctrica, agua y gas y; como así también la captación, depuración y distribución de agua. Refleja la evolución conjunta de la cantidad y de la calidad, eliminando la influencia de los precios.</p>",
    fd: "Scraped (XLS)",
    fdr: "http://www.fiel.org/publicaciones/CuadrosIC/CUAD_INDI_1671639236948.xls",
    fu: "FIEL",
    fur: "http://www.fiel.org/",
    frec: "Mensual",   
    d: "",
    min: 80,
    chart: {
      dates:payload,
      dimensions: [
        {
          
          label: "IPI FIEL",
          data: payload.estacional,
          color: "rgba(46,120,210,0.25)",
          
          
          },
          {
            
            label: "IPI FIEL",
            data: payload.desestacional,
            color: "rgba(46,120,210,1)",
            
            
            },          
      ],
    }
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));


})()