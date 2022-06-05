  const expoDates = async () => { try { return (await import("~/json/cuentas/gas/dates.json")).default } catch (t) { return console.log(t), [] } };
const acero = async () => { try { return (await import("~/json/cuentas/gas/d.json")).default } catch (t) { return console.log(t), [] } };
 
async function gasData() {
  return {
    labels: await expoDates(),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await acero(),
        borderColor: "rgba(46,120,210,1)",

        pointRadius: 0,
        borderWidth: 2,
      },

    ],
  }
}

export { gasData };
