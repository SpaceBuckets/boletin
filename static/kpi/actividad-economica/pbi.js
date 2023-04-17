module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "pbi"
 
const url = 'https://www.eia.gov/international/api/series_data/csv?location32=08&products32=000000000000000000000000000000000000000000000000000000004&frequency=A&unit=0&start=0&generated=03-15-2023_21-02-59'
const payload = await parsers.datosGobarCSV(0,1,url)


  const post = {
    kpi,
  t: "PBI (PPP)",
  st: "Producto Bruto Interno (per Capita)",
  sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
  c: "<p>El PBI es un indicador que mide el valor de todos los bienes y servicios finales producidos en un país durante un período determinado de tiempo (generalmente un año). Esto incluye todo lo que se produce en el país, tanto por empresas nacionales como extranjeras, y se valora al precio de mercado.</p><p>El INDEC calcula el PBI utilizando un enfoque de producción, que se basa en la suma del valor agregado de todos los sectores de la economía. El valor agregado se refiere al valor que se crea en cada sector económico después de deducir los costos de los bienes y servicios intermedios utilizados en la producción.</p><p>El INDEC recopila información de una amplia variedad de fuentes, incluyendo encuestas a empresas, información de impuestos y estadísticas de comercio exterior, entre otros. Con esta información, se calcula el valor agregado de cada sector económico y se realiza la suma total para obtener el PBI del país.</p><p>Es importante destacar que el PBI se presenta en términos nominales y reales. El PBI nominal refleja el valor de los bienes y servicios producidos a precios corrientes, mientras que el PBI real se ajusta por los cambios en los precios y refleja la producción en términos constantes. El PBI real es utilizado con frecuencia para comparar el desempeño económico de un país a lo largo del tiempo, eliminando los efectos de la inflación.</p>",
  fd: "Datos BM",
  fdr: "https://api.worldbank.org/v2/country/arg/indicator/NY.GDP.PCAP.KD?format=json&per_page=5000",
  fu: "Banco Mundial",
  fur: "https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD?locations=AR",
  frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'), 
  d: "El producto bruto interno (PBI)​ es una magnitud macroeconómica que expresa el valor monetario de la producción de bienes y servicios de demanda final de un país o región durante un período determinado.",
  dimensions: [
      {
label: "PBI PPP",
        data: payload,
        
      },
  ]
}

parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()


