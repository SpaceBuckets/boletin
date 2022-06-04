const emaeB = async () => { try { return (await import("~/json/emae/base/d.json")).default } catch (t) { return console.log(t), [] } };
const emaeD = async () => { try { return (await import("~/json/emae/estacional/d.json")).default } catch (t) { return console.log(t), [] } };
const emaeT = async () => { try { return (await import("~/json/emae/tendencia/d.json")).default } catch (t) { return console.log(t), [] } };
const emaeDates = async () => { try { return (await import("~/json/emae/base/dates.json")).default } catch (t) { return console.log(t), [] } };

async function emae() {
  return {
    labels: await emaeDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await emaeD(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        fill: false,
        label: "Tendencia",
        data: await emaeT(),
        borderColor: "#7a49a580",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await emaeB(),
        borderColor: "rgba(46,120,210,0.25)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
  }
}

export { emae };
