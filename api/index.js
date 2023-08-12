import fs from 'fs';
import path from 'path';
import url from 'url';

export default (req, res, next) => {
  const { pathname, query } = url.parse(req.url, true);
  const [_, kpiName] = pathname.match(/^\/kpi\/(.*?)\/api$/) || [];
  const filePath = kpiName && path.resolve(__dirname, '..', 'static', 'data', `${kpiName}.json`);

  if (!fs.existsSync(filePath)) return res.writeHead(404).end();

  const { dimension, startDate, endDate, frec } = query;
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

  res.end(JSON.stringify(outputData));
};
