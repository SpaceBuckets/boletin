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
    c: "<p>El Índice de Producción Industrial (IPI) de la Fundación FIEL es un indicador económico que mide la evolución de la producción industrial en Argentina. Este índice se basa en una encuesta que se realiza mensualmente a un conjunto de empresas representativas de la actividad industrial en el país.</p><p>La encuesta abarca diferentes sectores de la industria manufacturera, y se realiza a nivel nacional y regional. En la encuesta se recopilan datos sobre la producción industrial, el nivel de utilización de la capacidad instalada, las ventas, el empleo y la inversión en el sector. A partir de estos datos, se construye el índice de producción industrial de la Fundación FIEL.</p><p>El índice se elabora utilizando una metodología similar a la del Índice de Producción Industrial (IPI) del INDEC, pero con algunas diferencias en la selección de las empresas encuestadas y en la forma de calcular los ponderadores. El índice de la Fundación FIEL se publica mensualmente y se presenta en términos de índice base 2003.</p><p>El IPI de la Fundación FIEL es un indicador importante para evaluar el rendimiento del sector industrial en Argentina y su impacto en la economía en general. Además, la encuesta que se realiza para construir el índice también proporciona información valiosa sobre la situación actual y las perspectivas futuras del sector industrial.</p>",
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