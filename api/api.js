exports.handler = async (event, context) => {
  try {
    const { queryStringParameters } = event;
    const { kpi: kpiName, startDate, endDate, frec } = queryStringParameters;

    if (!kpiName) {
      return { statusCode: 400, body: JSON.stringify({ error: 'KPI name is missing' }) };
    }

    const filePath = `${process.env.URL}/data/${kpiName}.json`;

    const fetchResponse = await fetch(filePath);
    if (!fetchResponse.ok) {
      return { statusCode: 404, body: JSON.stringify({ error: 'KPI not found' }) };
    }

    const fileData = await fetchResponse.json();
    let outputData = fileData?.dimensions || {};

    const aggregate = (arr, period) => arr.reduce((groups, item) => {
      const key = item.x.substr(0, period);
      groups[key] = groups[key] || { sum: 0, count: 0 };
      groups[key].sum += item.y;
      groups[key].count++;
      return groups;
    }, {});

    for (const dim in outputData) {
      if ((startDate || endDate) && outputData[dim].data.length > 0) {
        outputData[dim].data = outputData[dim].data.filter(item => (!startDate || item.x >= startDate) && (!endDate || item.x <= endDate));
      }

      if (frec && ['Diaria', 'Mensual'].includes(fileData.frec)) {
        const period = frec.toLowerCase() === 'anual' ? 4 : 7;
        outputData[dim].data = Object.entries(aggregate(outputData[dim].data, period)).map(([key, value]) => ({
          x: key,
          y: fileData.frec === 'mean' ? (value.sum / value.count).toFixed(2) : value.sum.toFixed(2)
        }));
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(outputData)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
