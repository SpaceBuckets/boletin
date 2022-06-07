  const cambio = async () => { try { return (await import("../monetaria/blue/usd.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
  const adr = async () => { try { return (await import("../monetaria/blue/blue.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
  const trcmDates = async () => { try { return (await import("../monetaria/blue/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };


 

async function cambioData() {
  return {
    labels: await trcmDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await cambio(),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(178,34,34,0.05)",
        label: "Desestacionalizado",
        data: await adr(),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 1.2,
        fill: "-1", //fill until previous dataset
      },
      {
        backgroundColor: "transparent",
        label: "Desestacionalizado",
        // data: blue,
        borderColor: "blue",
        pointRadius: 0,
        borderWidth: 0,
      },
    ],
  }
}

export { cambioData };
