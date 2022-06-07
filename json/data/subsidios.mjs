  const expoDates = async () => { try { return (await import("../cuentas/subenergia/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
  const transporte = async () => { try { return (await import("../cuentas/subtransporte/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
  const energia = async () => { try { return (await import("../cuentas/subenergia/d.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };


async function subsidiosData() {
  return {
    labels: await expoDates(),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Transporte",
        data: await transporte(),
        borderColor: "rgba(46,120,210,0.25)",

        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Energia",
        data: await energia(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }
}

export { subsidiosData };
