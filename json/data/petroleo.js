  const expoDates = async () => { try { return (await import("~/json/cuentas/pozos/dates.json")).default } catch (t) { return console.log(t), [] } };
const transporte = async () => { try { return (await import("~/json/cuentas/pozos/d.json")).default } catch (t) { return console.log(t), [] } };
const transportee = async () => { try { return (await import("~/json/cuentas/pozosmetros/d.json")).default } catch (t) { return console.log(t), [] } };


 
async function petroleoData() {
  return {
    labels: await expoDates(),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await transporte(),
        borderColor: "#2E78D2",
 
        pointRadius: 0,
        borderWidth: 2,
      },
/*           {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Energia",
              yAxisID: 'B',

        data: transportee,
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      }, */
    ],
  }
}

export { petroleoData };