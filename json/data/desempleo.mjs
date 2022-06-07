  const empleoDates = async () => { try { return (await import("../empleo/general/dates.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleo = async () => { try { return (await import("../empleo/general/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoCaba = async () => { try { return (await import("../empleo/caba/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoCuyo = async () => { try { return (await import("../empleo/cuyo/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoGba = async () => { try { return (await import("../empleo/gba/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoNordeste = async () => { try { return (await import("../empleo/nordeste/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoNoroeste = async () => { try { return (await import("../empleo/noroeste/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoPampeana = async () => { try { return (await import("../empleo/pampeana/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const empleoPatagonia = async () => { try { return (await import("../empleo/patagonia/d.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };


async function desempleoData() {
  return {
    labels: await empleoDates(),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0.0)',
        label: "Desestacionalizado",
        data: await empleo(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoCaba(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoCuyo(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoGba(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoNordeste(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoNoroeste(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoPampeana(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        fill: false,
        label: "Base",
        data: await empleoPatagonia(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1.5,
      },                                                                             
    ],
  }
}

export { desempleoData };
