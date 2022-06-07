  const ingresos = async () => { try { return (await import("../cuentas/ingresos/d.json")).default } catch (t) { return console.log(t), [] } };
const gastos = async () => { try { return (await import("../cuentas/gastos/d.json")).default } catch (t) { return console.log(t), [] } };
const ahorro = async () => { try { return (await import("../cuentas/ahorro/d.json")).default } catch (t) { return console.log(t), [] } };
const expoDates = async () => { try { return (await import("../cuentas/ingresos/dates.json")).default } catch (t) { return console.log(t), [] } };

 
async function deficitData() {
  return {
    labels: await expoDates(),
    datasets: [
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Ingresos",
        data: await ingresos(),
        borderColor: "#009966",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "rgba(146,220,210,0)",
        label: "Gastos",
        data: await gastos(),
        borderColor: "#b22222CC",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: "#ccc",
        label: "Precio",
        data: await ahorro(),
        borderColor: "#ccc",
        pointRadius: 0,
        borderWidth: 0,
        type: "bar",
      },
    ],
  }
}

export { deficitData };
