const ipiB = async () => { try { return (await import("../ipi/base/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const ipiD = async () => { try { return (await import("../ipi/estacional/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };  
const ipiT = async () => { try { return (await import("../ipi/tendencia/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const ipiDates = async () => { try { return (await import("../ipi/base/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };


 

async function ipiData() {
  return {
    labels: await ipiDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await ipiD(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        fill: false,
        label: "Tendencia",
        data: await ipiT(),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await ipiB(),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { ipiData };
