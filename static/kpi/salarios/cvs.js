module.exports = (async function() {

  const parsers = require("@parsers");

  const kpi = "cvs"
    
  const post = {
    kpi,
    t: "Coeficiente de Variacion Salarial",
    st: "",
    c: "<p>El Coeficiente de Variación Salarial (CVS) es un indicador que se utiliza para medir la variabilidad de los salarios en un período determinado. Es una medida de la desigualdad salarial que existe en una economía.</p><p>En el caso de Argentina, el CVS es calculado por el Instituto Nacional de Estadísticas y Censos (INDEC) y se publica trimestralmente. Este indicador se obtiene a partir de la relación entre la desviación estándar de los salarios y el promedio de los salarios en un período determinado.</p><p>El CVS es un indicador importante para entender la evolución de los salarios en la economía y su distribución entre los trabajadores. Si el CVS es alto, significa que existe una mayor desigualdad salarial en el país, mientras que un CVS bajo indica una mayor homogeneidad en la distribución de los salarios.</p><p>Es importante destacar que el CVS no mide la cantidad de salario que reciben los trabajadores, sino la variabilidad de los mismos. Por lo tanto, un CVS bajo no necesariamente implica que los trabajadores ganen salarios altos, sino que hay una menor dispersión en los salarios en la economía.</p>",
    fd: "datos.gob.ar",
    fdr: "https://datos.gob.ar/sv/dataset/sspm-coeficiente-variacion-salarial-cvs/archivo/sspm_447.1",
    fu: "MECON",
    fur: "https://www.argentina.gob.ar/economia/politicaeconomica/macroeconomica",
    frec: "Diaria", 
    d: "",

    dimensions: [
        {
        fillColor: "rgba(46,120,210,0.05)",
        label: "Coeficiente de Variacion Salarial",
        data: await parsers.datosGobarAPI('447.1_TOTALTAL_0_0_5_37'),
        color: "rgba(46,120,210,1)",
        
        
        },
    ],
  }

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, JSON.stringify(post));
   

})()