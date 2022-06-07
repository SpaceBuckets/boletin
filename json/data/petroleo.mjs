  const expoDates = async () => { try { return (await import("../cuentas/pozos/dates.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
const transporte = async () => { try { return (await import("../cuentas/pozos/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
const transportee = async () => { try { return (await import("../cuentas/pozosmetros/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };


 
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
