const fetchData = async kpi => await (await fetch(`${process.env.URL}/data/${kpi}.json`)).json();

const filter = (data, start, end) => data.filter(item => (!start || item.x >= start) && (!end || item.x <= end));

const aggregate = (data, period, fruc) => Object.entries(data.reduce((groups, item) => {
  const key = item.x.substr(0, period);
  groups[key] = groups[key] || { sum: 0, count: 0 };
  groups[key].sum += item.y;
  groups[key].count++;
  return groups;
}, {})).map(([k, v]) => ({ x: k, y: fruc === 'mean' ? (v.sum / v.count).toFixed(2) : v.sum.toFixed(2) }));

exports.handler = async event => {
  try {
    const { kpi, start, end, agg } = event.queryStringParameters; 
    if (!kpi) return { statusCode: 400, body: JSON.stringify({ error: 'KPI name is missing' }) };
    const fileData = await fetchData(kpi);
    let outputData = {};

    for (const dimension in fileData.dimensions) {
      let data = fileData.dimensions[dimension].data;
      if (start || end) data = filter(data, start, end);
      if (agg && ['Diaria', 'Mensual'].includes(fileData.frec)) data = aggregate(data, agg.toLowerCase() === 'anual' ? 4 : 7, fileData.fruc);
      outputData[fileData.dimensions[dimension].label] = data;
    }

    return { statusCode: 200, body: JSON.stringify(outputData) };
  } catch {
    return { statusCode: 404, body: JSON.stringify({ error: 'KPI not found' }) };
  }
};
