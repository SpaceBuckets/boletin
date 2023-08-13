const fetchData = async kpi => await (await fetch(`${process.env.URL}/data/${kpi}.json`)).json();

const filter = (data, start, end) => data.filter(item => (!start || item.x >= start) && (!end || item.x <= end));

const mean = (data, fruc) => {
  const sum = data.reduce((acc, item) => acc + item.y, 0);
  return parseFloat((fruc === 'mean' ? sum / data.length : sum).toFixed(2));
};

const aggregate = (data, period, fruc) => {
  const groups = data.reduce((groups, item) => {
    const key = item.x.substr(0, period);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});

  return Object.entries(groups).map(([key, value]) => ({
    x: key,
    y: mean(value, fruc)
  }));
};


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
      outputData[fileData.dimensions[dimension].label.toLowerCase()] = data;
    }

    return { statusCode: 200, body: JSON.stringify(outputData) };
  } catch {
    return { statusCode: 404, body: JSON.stringify({ error: 'KPI not found' }) };
  }
};
