  const trcmDates = async () => { try { return (await import("../tcrm/dates.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };
  const trcb = async () => { try { return (await import("../tcrm/itcrb.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };
  const trcus = async () => { try { return (await import("../tcrm/itcrus.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };
  const trcm = async () => { try { return (await import("../tcrm/itcrm.json", { assert: { type: "json" } })).default } catch (t) { return console.log(t), [] } };


 
async function tcrmData() {
  return {
    labels: await trcmDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data:await trcm(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await trcus(),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await trcb(),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { tcrmData };
