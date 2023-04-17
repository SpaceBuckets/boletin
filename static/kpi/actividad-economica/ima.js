
module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "ima"
 

  const kpidata = {
    url: 'https://itegaweb.org/wp-content/uploads/2023/02/Indice-de-actividad-ene23.xlsx',
    sheet: 0,
    date: 0,
    items: [
      {name: "estacionalizado", id: 1},
      {name: "desestacionalizado", id: 3},
    ]
  }
  
  const payload = await parsers.genericXLS(kpidata)

  const post = {
    kpi,
    t: "IMA",
    st: "Índice Mensual de Actividad",
    sd: "El IMA está construido para resumir y revelar los puntos de giro en el nivel de actividad económica representada por el Estimador Mensual de Actividad Económica (EMAE) en una forma más clara y convincente que cada uno de sus componentes porque suaviza las volatilidades propias de cada uno de ellos.",
    c: "<p>Un Índice Mensual de Actividad (IMA) es una medida estadística que se utiliza para medir la evolución mensual de la actividad económica en un sector determinado. Por lo general, se construye mediante la combinación de varias variables económicas relevantes que reflejan el desempeño de un sector, como la producción, las ventas, los precios, el empleo, entre otros.El objetivo del IMA es proporcionar una visión general de la situación económica en un sector determinado en un período determinado. Además, puede ayudar a los tomadores de decisiones a identificar las tendencias económicas a corto plazo y a formular políticas públicas o empresariales más efectivas para el sector.</p>",
    fd: "Scraped (XLS)",
    fdr: "https://www.utdt.edu/download.php?fname=_167726983915481000.xls",
    fu: "UTDT",
    fur: "https://itegaweb.org/indicadores/",
      frec: parsers.detectDataType(payload.estacionalizado), 
  fruc: parsers.detectAggregationFunction(payload.estacionalizado),    
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),

    d: "El IPC mide la variación de precios de los bienes y servicios representativos del gasto de consumo de los hogares residentes en la zona seleccionada en comparación con los precios vigentes en el año base.",
    dimensions: [
      {
        label: "Desestacionalizado",
        data: payload.desestacionalizado,
        
      },       
        {
          label: "Estacionalizado",
          data: payload.estacionalizado,
          color: "rgba(46,120,210,0.3)",
        },  
              
    ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

