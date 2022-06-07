
const uciigen = async () => { try { return (await import("../ucii/general/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const alimentos = async () => { try { return (await import("../ucii/alimentos/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const automotriz = async () => { try { return (await import("../ucii/automotriz/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const edicion = async () => { try { return (await import("../ucii/edicion/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const metales = async () => { try { return (await import("../ucii/metales/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const metalmecanica = async () => { try { return (await import("../ucii/metalmecanica/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const minerales = async () => { try { return (await import("../ucii/minerales/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const papel = async () => { try { return (await import("../ucii/papel/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const petroleo = async () => { try { return (await import("../ucii/petroleo/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const plastico = async () => { try { return (await import("../ucii/plastico/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const quimicos = async () => { try { return (await import("../ucii/quimicos/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const tabaco = async () => { try { return (await import("../ucii/tabaco/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const textiles = async () => { try { return (await import("../ucii/textiles/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const uciiDates = async () => { try { return (await import("../ucii/general/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };

async function uciiData() {
  return {
    labels: await uciiDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Desestacionalizado",
        data: await uciigen(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        fill: false,
        label: "Base",
        data: await alimentos(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await automotriz(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await edicion(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await metales(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await metalmecanica(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await minerales(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await papel(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await petroleo(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await plastico(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await quimicos(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await tabaco(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        fill: false,
        label: "Base",
        data: await textiles(),
        borderColor: "rgba(46,120,210,0.15)",
        pointBackgroundColor: "#C1D7F2",
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
  }
}




export { uciiData };
