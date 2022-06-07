const iceDates = async () => { try { return (await import("../embi/dates.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const argentina = async () => { try { return (await import("../embi/argentina.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const brasil = async () => { try { return (await import("../embi/brasil.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const chile = async () => { try { return (await import("../embi/chile.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const colombia = async () => { try { return (await import("../embi/colombia.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const mexico = async () => { try { return (await import("../embi/mexico.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };
const latino = async () => { try { return (await import("../embi/latino.json", { assert: { type: "json" } }))  } catch (t) { return console.log(t), [] } };

 


async function embiData() {
  return {
       labels: await iceDates(),
      datasets: [
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Desestacionalizado",
          data: await brasil(),
          borderColor: "rgba(46,120,210,0.3)",

          pointRadius: 0,
          borderWidth: 1,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Desestacionalizado",
          data: await chile(),
          borderColor: "rgba(46,120,210,0.3)",

          pointRadius: 0,
          borderWidth: 1,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Desestacionalizado",
          data: await colombia(),
          borderColor: "rgba(46,120,210,0.3)",

          pointRadius: 0,
          borderWidth: 1,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Desestacionalizado",
          data: await mexico(),
          borderColor: "rgba(46,120,210,0.3)",

          pointRadius: 0,
          borderWidth: 1,
        },
        {
          backgroundColor: 'rgba(46,120,210,0)',
          label: "Desestacionalizado",
          data: await latino(),
          borderColor: "#7a49a580",

          pointRadius: 0,
          borderWidth: 1,
        },
        {
          backgroundColor: 'rgba(146,220,210,0)',
          label: "Desestacionalizado",
          data: await argentina(),
          borderColor: "#2E78D2",
          pointRadius: 0,
          borderWidth: 1.5,

        }

      ],
   }
}
  export { embiData };
