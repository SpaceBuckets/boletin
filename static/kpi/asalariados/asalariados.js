module.exports = (async function() {
  
  const parsers = require("../../parsers");
  const generatedTime = require(`../../generatedTime.json`)
  const kpi = "asalariados"

  try {
    await parsers.datosGobarAPI(kpi, "privadob", '151.1_AARIADODAD_2012_M_31')
    await parsers.datosGobarAPI(kpi, "privadod", '151.1_AARIADOTAC_2012_M_26')

    var post = {
      kpi,
      t: "Asalariados",
      st: "Sector Público y Privado",
      sd: "Este indicador <em>refleja la evolución mensual de la actividad económica</em> de 16 sectores productivos. Permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
      c: "<p>Aquellas personas que trabajan a cambio de un sueldo, salario, remuneración, comisión o cualquier otra retribución en metálico o en especie, para un empresario (persona física o jurídica). Según el empleador sea público o privado se puede hablar de asalariados del sector público o del sector privado. El trabajo por un salario, trabajo asalariado o mano de obra asalariada es la relación socioeconómica entre un trabajador por cuenta ajena (también denominado trabajador asalariado) y un empleador (también denominado empresario), por medio de la cual el primero cede su fuerza de trabajo a través de un contrato laboral, formal o informal. Estas transacciones por lo general tienen lugar en el mercado laboral en el cual las remuneraciones o salarios son determinados por el mercado.1​2​ A cambio del salario, el producto del trabajo se convierte por lo general en propiedad del empleador, excepto en casos especiales tales como la propiedad de patentes de propiedad intelectual en los Estados Unidos en donde los reconocimientos de patentes son por lo general asignados a la persona inventora original. Un trabajador asalariado es una persona cuyo medio principal de ingresos es la venta de su esfuerzo.</p>",
      f: "https://www.indec.gob.ar/ftp/cuadros/economia/metodologia_emae_ago_16.pdf",
      d: "El Estimador mensual de actividad económica (EMAE) refleja la evolución mensual de la actividad económica del conjunto de los sectores productivos a nivel nacional. Este indicador permite anticipar las tasas de variación del producto interno bruto (PIB) trimestral.",
      cat: "Salarios",
      chartdata: {
        labels: require(`../../data/${generatedTime}/${kpi}/privadob/dates.json`),
        datasets: [
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Empleo Privado",
            data: require(`../../data/${generatedTime}/${kpi}/privadod/d.json`),
            borderColor: "#2E78D2",
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            backgroundColor: 'rgba(46,120,210,0)',
            label: "Empleo Publico",
            data: require(`../../data/${generatedTime}/${kpi}/privadob/d.json`),
            borderColor: "rgba(46,120,210,0.25)",
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
