const impoDates = async () => { try { return (await import("../impo/dolar/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const impo = async () => { try { return (await import("../impo/dolar/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const expo = async () => { try { return (await import("../expo/dolar/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const saldo = async () => { try { return (await import("../expo/saldo/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };

async function balanzaData() {
  return {
    labels: await impoDates(),
    datasets: [
      {
        backgroundColor: "rgba(46,120,210,0)",
        label: "Importaciones",
        data: await impo(),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Exportaciones",
        data: await expo(),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "#ccc",
        label: "Saldo Comercial",
        type: "bar",
        data: await saldo(),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
      },
    ],
  }
}

export { balanzaData };
