import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';
import { TOASTER_MSG } from "../../utils/constants";


const TimeSeriesChart = ({ priceType }) => {
  const { timeSeries } = useSelector(state => state.timeSeries);
  const [data, setData] = useState([]);
  const convertTimeStamp = ((unixArray) => {
    const convertedDateArray = unixArray.map(date => new Date(date * 1000));
    return convertedDateArray;
  })
  useEffect(() => {
    if (timeSeries.length > 0) {

      switch (priceType) {
        case 'open':
          const openData = timeSeries.map(e => ({
            x: convertTimeStamp(e.financialChartXValues),
            decreasing: { line: { color: 'red' } },
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            open: e.financialChartOpenValues,
            type: 'candlestick',
          }))
          setData(openData);
          break;
        case 'close':
          const closeData = timeSeries.map(e => ({
            x: convertTimeStamp(e.financialChartXValues),
            decreasing: { line: { color: 'red' } },
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            close: e.financialChartCloseValues,
            type: 'candlestick',
          }))
          setData(closeData);
          break;
        case 'high':
          const highData = timeSeries.map(e => ({
            x: convertTimeStamp(e.financialChartXValues),
            decreasing: { line: { color: 'red' } },
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            high: e.financialChartHighValues,
            type: 'candlestick',
          }))
          setData(highData);
          break;
        case 'low':
          const lowData = timeSeries.map(e => ({
            x: convertTimeStamp(e.financialChartXValues),
            decreasing: { line: { color: 'red' } },
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            low: e.financialChartLowValues,
            type: 'candlestick',
          }))
          setData(lowData);
          break;
        default:
          const multiData = timeSeries.map(e => ({
            x: convertTimeStamp(e.financialChartXValues),
            close: e.financialChartCloseValues,
            decreasing: { line: { color: 'red' } },
            high: e.financialChartHighValues,
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            low: e.financialChartLowValues,
            open: e.financialChartOpenValues,
            type: 'candlestick',
          }))
          setData(multiData);
      }
    }

  }, [timeSeries, priceType]);

  return (
    <>
      {timeSeries && timeSeries.length > 0 ? (
        <Plot
          data={data}
          layout={{
            width: 720,
            height: 440,
            // ==title: selectedRecord.description,
            dragmode: 'zoom',
            showlegend: false,
            xaxis: {
              rangeslider: {
                visible: false
              }
            },
            yaxis: {
              autorange: true,
            }
          }}
          options={{ displaylogo: 'false' }}
        />
      ) : (<p>{TOASTER_MSG.noData}</p>)}
    </>

  );
};

export default TimeSeriesChart;