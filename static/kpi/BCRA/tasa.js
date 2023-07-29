module.exports = (async function() {

  const parsers = require("@parsers");
  const kpi = "tasa"
 
  const reambito = {
    referencia: '7935',
    badlar: '1222',
    plazo: '7938',
    pases: '7921',
    uva: '7934',
    prestamos: '7925'
  }
 
  var payload = {}
  var fillLength = Math.max(...(await Promise.all(Object.values(reambito).map(v => parsers.scrapeBCRA(v).then(d => d.length)))));
  var chosenOne = ''
 
  for (let [key, value] of Object.entries(reambito)) {
    var data = (await parsers.scrapeBCRA(value)).reverse()
    payload[key] = []
    for (let i = 0; i < fillLength; i++) { payload[key][i] = { x: 0, y: 0} }
    for (let i = 0; i < data.length; i++) {
      payload[key][i].x = data[i].x
      payload[key][i].y = data[i].y
    }
    payload[key] = payload[key].filter(element => { if (Object.keys(element).length !== 0) { return true; } return false; }).reverse();
    if (payload[key][0].x !== 0) { chosenOne = key }
  }
  

  for (let key of Object.keys(reambito)) {
    payload[key].map((item, i) => { item.x = payload[chosenOne][i].x; });
  }
 
  const post = {
    kpi,
    t: "Tasas de Interés",
    st: "Tasa de Política Monetaria",
    sd: "La tasa de referencia de la política monetaria es la de Letras de Liquidez (LELIQ). La tasa de política monetaria indica el sesgo de la política que adopta la autoridad monetaria para alcanzar sus metas de inflación.",
    c: "<p>El Banco Central de la República Argentina (BCRA) establece y fija las tasas de interés que regirán en la economía del país. Estas tasas son importantes porque afectan el costo del crédito, el ahorro y la inversión, y por lo tanto, la actividad económica y el nivel de inflación. Las tasas de interés que fija el BCRA se dividen en dos tipos:</p><p>Tasa de política monetaria: es la tasa que fija el BCRA para regular la cantidad de dinero en circulación y controlar la inflación. Esta tasa es la referencia para otras tasas de interés en la economía y se ajusta de acuerdo con las condiciones económicas y los objetivos de inflación del banco central. La tasa de política monetaria actualmente se llama 'tasa de interés de pases' y se utiliza para las operaciones de pase activo y pase pasivo.</p><p>Tasas de interés de los instrumentos financieros del BCRA: son las tasas de interés que se aplican a los instrumentos financieros emitidos por el BCRA, como las Letras de Liquidez (LELIQ), los Pases Pasivos y los Pases Activos. Estas tasas son utilizadas por los bancos y otras entidades financieras para financiarse y otorgar préstamos, y están influenciadas por la tasa de política monetaria.</p><p>El BCRA utiliza las tasas de interés como una herramienta para controlar la inflación y estabilizar la economía. Si la inflación es alta, el banco central puede aumentar las tasas de interés para reducir el consumo y la inversión, lo que disminuiría la demanda y la inflación. Si la economía está en recesión, el BCRA puede disminuir las tasas de interés para incentivar la inversión y el consumo, lo que aumentaría la demanda y la actividad económica.</p><p>Es importante tener en cuenta que las tasas de interés del BCRA son un instrumento clave de la política monetaria del país y que su evolución puede tener un gran impacto en la economía y en la vida cotidiana de las personas. Por esta razón, es importante seguir de cerca las decisiones y pronunciamientos del banco central en materia de política monetaria.</p>",
    fd: "Scraped (XLS)",
    fdr: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
    fu: "BCRA",
    fur: "http://www.bcra.gov.ar/Pdfs/PublicacionesEstadisticas/series.xlsm",
      frec: parsers.detectDataType(payload.referencia), 
  fruc: parsers.detectAggregationFunction(payload.referencia),
  u: new Date().toLocaleDateString('en-CA').split('/').join('-'),
  feat: true,

    d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
    max: 120,
    dimensions: [
        {
          label: "Referencia",
          data: payload.referencia,
           
        },
       {
          label: "Badlar",
          data: payload.badlar,
          color: "rgba(46,120,210,0.25)", 
          borderWidth: 1,
        },
        {
          label: "Plazo Fijo",
          data: payload.plazo,
          color: "rgba(46,120,210,0.25)", 
          borderWidth: 1,
        },
        {      
          label: "Pases Pasivos (1d)",
          data: payload.pases,
          color: "#7a49a580",
        },  
        {      
          label: "UVA",
          data: payload.uva,
          color: "rgba(46,120,210,0.25)", 
        },  
        {      
          label: "Prestamos",
          data: payload.prestamos,
          color: "rgba(46,120,210,0.25)", 
        },                 
      ]
  }

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

