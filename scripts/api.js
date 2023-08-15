// apiMock.js

const fetchData = (kpi) => fetch(`/data/${kpi}.json`).then(res => res.json());

const filter = (data, start, end) => data.filter(item => (!start || item.x >= start) && (!end || item.x <= end));

const aggregate = (data, period, fruc) =>
  Object.entries(data.reduce((groups, { x, y }) => {
    const key = x.substr(0, period);
    groups[key] = groups[key] || { sum: 0, count: 0 };
    groups[key].sum += y;
    groups[key].count++;
    return groups;
  }, {})).map(([k, { sum, count }]) => ({
    x: period === 4 ? k + '-01-01' : period === 7 ? k + '-01' : k,
    y: parseFloat((fruc === 'mean' ? sum / count : sum).toFixed(2))
  }));

export const handleRequest = async (kpi, start, end, agg) => {
    const fileData = await fetchData(kpi);
    const outputData = Object.values(fileData.dimensions).map(({ label, color, data }) => {
        let filteredData = start || end ? filter(data, start, end) : data;
        if (agg && ['Diaria', 'Mensual'].includes(fileData.frec)) {
        const period = agg.toLowerCase() === 'anual' ? 4 : 7;
        filteredData = aggregate(filteredData, period, fileData.fruc);
        }
        return { label, color, data: filteredData };
    });

    return { title: fileData.t, dimensions: outputData };
};
