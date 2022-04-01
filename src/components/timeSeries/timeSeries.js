import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';


const TimeSeriesChart = () => {
  const { timeSeries } = useSelector(state => state.timeSeries);
  const [data, setData] = useState([]);
  const convertTimeStamp = ((unixArray) =>{
    const convertedDateArray = unixArray.map(date => new Date(date * 1000));
    console.log(convertedDateArray)
    return convertedDateArray;
  })
  useEffect(() => {
    if (timeSeries.length > 0) {
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
      }));
      setData(multiData);
    }
  }, [timeSeries])

  return (
    <>
      {timeSeries ? (
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
      ) : (
        <p>
          Please select a stock.
        </p>)}
    </>

  );
};

TimeSeriesChart.propTypes = {
  timeSeries: PropTypes.object.isRequired
}

export default TimeSeriesChart;