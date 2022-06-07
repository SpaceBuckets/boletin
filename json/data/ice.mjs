  const iceDates = async () => { try { return (await import("../ice/dates.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const iceCoyuntural = async () => { try { return (await import("../ice/coyuntural.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
  const iceEstructural = async () => { try { return (await import("../ice/estructural.json", { assert: { type: "json" } })).default  } catch (t) { return console.log(t), [] } };
 
async function iceData() {
  return {
    labels: await iceDates(),
    datasets: [
      {
        backgroundColor: 'rgba(46,120,210,0)',
        label: "Desestacionalizado",
        data: await iceCoyuntural(),
                    borderColor: "rgba(46,120,210,0.3)",

        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        backgroundColor: 'rgba(146,220,210,0)',
        label: "Desestacionalizado",
        data: await iceEstructural(),
        borderColor: "#2E78D2",
        pointRadius: 0,
        borderWidth: 1.5,

      },    
          
    ],
  }
}

export { iceData };
