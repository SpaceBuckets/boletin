const fetchData = kpi => fetch(`${process.env.URL}/data/${kpi}.json`).then(res => res.json());

const filter = (data, start, end) => data.filter(item => (!start || item.x >= start) && (!end || item.x <= end));

const aggregate = (data, period, fruc) => Object.entries(data.reduce((groups, { x, y }) => {
  const key = x.substr(0, period);
  groups[key] = groups[key] || { sum: 0, count: 0 };
  groups[key].sum += y;
  groups[key].count++;
  return groups;
}, {})).map(([k, { sum, count }]) => ({
  x: period === 4 ? k + '-01-01' : (period === 7 ? k + '-01' : k),
  y: parseFloat((fruc === 'mean' ? sum / count : sum).toFixed(2))
}));

exports.handler = async event => {
  try {
    const { kpi, start, end, agg } = event.queryStringParameters;
    if (!kpi) return { statusCode: 400, body: JSON.stringify({ error: 'KPI name is missing' }) };

    const fileData = await fetchData(kpi);
    let outputData = [];
    let megaData = {}
    for (const { label, color, data } of Object.values(fileData.dimensions)) {
      let filteredData = start || end ? filter(data, start, end) : data;

      if (agg && ['Diaria', 'Mensual'].includes(fileData.frec)) {
        const period = agg.toLowerCase() === 'anual' ? 4 : 7;
        filteredData = aggregate(filteredData, period, fileData.fruc);
      }

      outputData.push({ label, color, data: filteredData });
    }
    megaData = {title: fileData.t, dimensions: outputData}
    const headers = {
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      'Access-Control-Allow-Headers': 'Content-Type', // Allow the Content-Type header
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(megaData),
    };
  } catch {
    return { statusCode: 404, body: JSON.stringify({ error: 'KPI not found' }) };
  }
};
