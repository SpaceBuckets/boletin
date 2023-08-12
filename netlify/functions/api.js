const fs = require('fs');
const path = require('path');
const url = require('url');

exports.handler = async (event, context) => {
  try {
    const { queryStringParameters } = event; // Retrieve query parameters
    const { kpi: kpiName, dimension, startDate, endDate, frec } = queryStringParameters;

    if (!kpiName) return { statusCode: 400, body: JSON.stringify({ error: 'KPI name is missing' }) };

    const filePath = kpiName && path.join(process.cwd(), 'data', `${kpiName}.json`);

    if (!fs.existsSync(filePath)) return { statusCode: 404, body: JSON.stringify({ error: 'KPI not found' }) };

    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const dimensionData = fileData?.dimensions?.[dimension]?.data || [];
    let outputData = [...dimensionData];

    const aggregate = (arr, period) => arr.reduce((groups, item) => {
      const key = item.x.substr(0, period);
      groups[key] = groups[key] || { sum: 0, count: 0 };
      groups[key].sum += item.y;
      groups[key].count++;
      return groups;
    }, {});

    if ((startDate || endDate) && outputData.length > 0) {
      outputData = outputData.filter(item => (!startDate || item.x >= startDate) && (!endDate || item.x <= endDate));
    }

    if (frec && ['Diaria', 'Mensual'].includes(fileData.frec)) {
      const period = frec.toLowerCase() === 'anual' ? 4 : 7;
      outputData = Object.entries(aggregate(outputData, period)).map(([key, value]) => ({
        x: key,
        y: fileData.fruc === 'mean' ? (value.sum / value.count).toFixed(2) : value.sum.toFixed(2)
      }));
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
