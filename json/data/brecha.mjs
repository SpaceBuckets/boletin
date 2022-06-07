  const cambio = async () => { try { return (await import("../monetaria/blue/gap.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };
const trcmDates = async () => { try { return (await import("../monetaria/blue/dates.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };

 
async function brechaData() {
  return  {
    labels: await trcmDates(),
    datasets: [
      {
        backgroundColor: "rgba(178,34,34,0.05)",
        label: "Desestacionalizado",
        data: await cambio(),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { brechaData };
