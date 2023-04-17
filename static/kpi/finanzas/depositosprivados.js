module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "depositosprivados"
  const payload = await parsers.datosGobarAPI('90.1_DET_DESAGRIV_0_0_38')
  
  const post = {
    kpi,
    t: "Depositos Privados",
    st: "",
    c: "<p>Los depósitos privados del BCRA (Banco Central de la República Argentina) se refieren a los depósitos que las entidades financieras y otros agentes privados realizan en el BCRA como forma de mantener sus reservas y cumplir con los requerimientos legales de liquidez.</p><p>Estos depósitos privados son una herramienta importante en la política monetaria del BCRA, ya que permiten al banco central regular la cantidad de dinero en circulación en la economía. Cuando el BCRA recibe depósitos de las entidades financieras y otros agentes, estos fondos se registran como parte de la base monetaria y pueden ser utilizados por el BCRA para otorgar préstamos a las entidades financieras, emitir billetes, comprar y vender divisas en el mercado cambiario, entre otras operaciones.</p><p>El monto de los depósitos privados en el BCRA puede variar en función de las condiciones del mercado financiero y las políticas monetarias del BCRA. Si el banco central decide incrementar la tasa de interés de referencia, por ejemplo, es posible que las entidades financieras decidan incrementar sus depósitos en el BCRA para obtener una mayor rentabilidad.</p><p>Es importante destacar que los depósitos privados en el BCRA también pueden ser afectados por factores externos, como la confianza en la economía y la estabilidad política del país. Si los inversores y agentes privados perciben que la situación económica es incierta o inestable, es posible que decidan retirar sus fondos del BCRA y buscar opciones de inversión más seguras.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/dataset/sspm_90/archivo/sspm_90.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),  
    d: "",
    dimensions: [
        {
        
        label: "Depositos privados",
        data: payload,
        color: "rgba(46,120,210,1)",
        },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
   

})()