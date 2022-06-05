  const eprivDates = async () => { try { return (await import("~/json/empleo/privadob/dates.json")).default } catch (t) { return console.log(t), [] } };
  const epriv = async () => { try { return (await import("~/json/empleo/privadod/d.json")).default } catch (t) { return console.log(t), [] } };
  const epub = async () => { try { return (await import("~/json/empleo/privadob/d.json")).default } catch (t) { return console.log(t), [] } };


 
 async function asalariadosData() {
  return {
    labels: await eprivDates(),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "Desestacionalizado",
        data: await epriv(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "Desestacionalizado",
        data: await epub(),
        borderColor: "rgba(46,120,210,0.25)",
        pointRadius: 0,
        borderWidth: 1.5,
      },       
    ],
  }
}

export { asalariadosData };
