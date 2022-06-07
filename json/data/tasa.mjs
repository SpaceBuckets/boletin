const trcmDates = async () => { try { return (await import("../monetaria/tasas/tasadates.json")).default } catch (t) { return console.log(t), [] } };
const tasa = async () => { try { return (await import("../monetaria/tasas/tasatasa.json")).default } catch (t) { return console.log(t), [] } };
const badlar = async () => { try { return (await import("../monetaria/tasas/tasabadlar.json")).default } catch (t) { return console.log(t), [] } };
const plazo = async () => { try { return (await import("../monetaria/tasas/tasaplazo.json")).default } catch (t) { return console.log(t), [] } };
const pases = async () => { try { return (await import("../monetaria/tasas/tasapases.json")).default } catch (t) { return console.log(t), [] } };

async function tasaData() {
  return {
    labels: await trcmDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Tasa BCRA",
        data: await tasa(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Tasa Badlar",
        data: await badlar(),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Tasa plazo fijo",
        data: await plazo(),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Tasa Pases Pasivos 1 dia",
        data: await pases(),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  }
}

export { tasaData };
