  const trcmDates = async () => { try { return (await import("../reservas/diariadates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const cambio = async () => { try { return (await import("../reservas/diaria.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };

 
//const colours = cambio.map((value) => value < 0 ? '#b22222CC' : '#009966');
async function comprasbcraData() {
  return {
    labels: await trcmDates(),
    datasets: [
      {
        backgroundColor: '#ccc',
        label: "Desestacionalizado",
        data: await cambio(),
          barThickness: 0.5,
        pointRadius: 0,
      },

      {
        backgroundColor: "transparent",
        label: "Desestacionalizado",
        // data: blue,
        borderColor: "blue",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { comprasbcraData };
