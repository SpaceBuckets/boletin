  const isacB = async () => { try { return (await import("../isac/base/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const isacD = async () => { try { return (await import("../isac/estacional/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const isacT = async () => { try { return (await import("../isac/tendencia/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const isacDates = async () => { try { return (await import("../isac/base/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };



 
async function isacData() {
  return {
    labels: await isacDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await isacD(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        fill: false,
        label: "Tendencia",
        data: await isacT(),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await isacB(),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { isacData };
