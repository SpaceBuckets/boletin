module.exports = (async function () {

  const parsers = require("@parsers");

  const kpi = "auhmonto"
  const url = 'https://infra.datos.gob.ar/catalog/sspm/dataset/165/distribution/165.1/download/asignacion-universal-por-hijo-pesos-corrientes.csv'
  const payload = await parsers.datosGobarCSV(0,1,url)
  const post = {
    kpi,
    t: "AUH Monto",
    st: "En pesos corrientes",
    sd: "Titulares de derecho de la Asignación Universal por Hijo e Hijo Discapacitado y de la Asignación Universal por Embarazo (AUE). Datos semestrales de beneficios liquidados a junio y diciembre de cada año",
    c: "<p>La Asignación Universal por Hijo (AUH) es un programa social implementado por el gobierno argentino en 2009 con el objetivo de mejorar las condiciones de vida de las familias más vulnerables y garantizar el acceso a la educación y la salud de los niños y adolescentes en edad escolar.</p><p>La AUH consiste en una asignación monetaria que se otorga mensualmente a los titulares de la misma, que son los padres o tutores de niños y adolescentes menores de 18 años que se encuentren en situación de vulnerabilidad social y económica, que no cuenten con trabajo registrado y que no perciban otro tipo de beneficios sociales.</p><p>Para acceder a la AUH, los interesados deben completar un formulario y presentar la documentación correspondiente en las oficinas de ANSES (Administración Nacional de la Seguridad Social), organismo encargado de la gestión del programa. Además, los titulares de la AUH deben cumplir con las obligaciones de mantener actualizados los datos personales y escolares de sus hijos, asistir a controles de salud y cumplir con el calendario de vacunación.</p>",
    d: "",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/km/dataset/sspm-politica-ingresos-asignacion-universal-por-hijo-para-proteccion-social-por-embarazo/archivo/sspm_188.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
      frec: parsers.detectDataType(payload), 
      fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString('en-CA').split('/').join('-'),     
    dimensions: [
        {
          label: "AUH",
          data: payload,
          
        },

      ]
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);


})()

