  const ipc = async () => { try { return (await import("../ipc/historico/dmensual.json")).default } catch (t) { return console.log(t), [] } };
const ipc2 = async () => { try { return (await import("../ipc/historico/danual.json")).default } catch (t) { return console.log(t), [] } };
const ipcDates = async () => { try { return (await import("../ipc/historico/dates.json")).default } catch (t) { return console.log(t), [] } };

 
async function ipcData() {
  return {
    labels: await ipcDates(),
    datasets: [
      {
        backgroundColor: "#2E78D295",
        label: "Desestacionalizado",
        data: await ipc(),
        type: 'bar',
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 0,
      },      
    ],
  }
}

export { ipcData };
