  const soja = async () => { try { return (await import("~/json/cuentas/soja/d.json")).default } catch (t) { return console.log(t), [] } };
const maiz = async () => { try { return (await import("~/json/cuentas/maiz/d.json")).default } catch (t) { return console.log(t), [] } };
const girasol = async () => { try { return (await import("~/json/cuentas/girasol/dates.json")).default } catch (t) { return console.log(t), [] } };
const trigo = async () => { try { return (await import("~/json/cuentas/trigo/d.json")).default } catch (t) { return console.log(t), [] } };
const expoDates = async () => { try { return (await import("~/json/cuentas/soja/dates.json")).default } catch (t) { return console.log(t), [] } };



 

async function cerealesData() {
  return {
    labels: await expoDates(),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await girasol(),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await maiz(),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await trigo(),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 2,
      },                    
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Energia",

        data: await soja(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }
}

export { cerealesData };
