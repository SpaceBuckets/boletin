  const trcmDates = async () => { try { return (await import("~/json/reservas/diariadates.json")).default } catch (t) { return console.log(t), [] } };
const trcm = async () => { try { return (await import("~/json/reservas/total.json")).default } catch (t) { return console.log(t), [] } };

 

async function reservasData() {
  return {
    labels:await trcmDates(),
    datasets: [

      {
        backgroundColor: 'rgba(46,120,210,0.1)',
        label: "Desestacionalizado",
        data: await trcm(),
        borderColor: '#2E78D2',
        pointRadius: 0,
        borderWidth: 1.5,
      },       
    ],
  }
}

export { reservasData };
