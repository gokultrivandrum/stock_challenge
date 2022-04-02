import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import TimeSeriesChart from "./timeSeries"
import {TOASTER_MSG } from "../../utils/constants";
import { Row, Col, Radio } from "antd";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { getTimeSeries } from '../../store/timeSeries';

const TimeSeries = () => {
  const [dateValue, onChange] = useState([new Date(), new Date()]);
  const [priceType, handleSizeChange] = useState('open');
  const {selectedSymbols}  = useSelector(state => state.selectedParams);
  const dispatch = useDispatch();

  useEffect(() => {
    if(dateValue[0] && priceType){
      selectedSymbols.forEach(selectedRecord => {
        dispatch(getTimeSeries({ symbol: selectedRecord.symbol, resolution : '1', from : parseInt((new Date(dateValue[0]).getTime() / 1000).toFixed(0)),
        to : parseInt((new Date(dateValue[1]).getTime() / 1000).toFixed(0))}));
      });
    }

  }, [dateValue, priceType, selectedSymbols])


  return (
    <>
      {selectedSymbols && selectedSymbols.length > 0 ? (
        <Row >
          <Col md={14}>
            <Radio.Group value={priceType}
              onChange={e => handleSizeChange(e.target.value)}>
              <Radio.Button value="close">Close</Radio.Button>
              <Radio.Button value="open">Open</Radio.Button>
              <Radio.Button value="high">High</Radio.Button>
              <Radio.Button value="low">Low</Radio.Button>
            </Radio.Group>
          </Col>
          <Col md={10}>
            <DateRangePicker onChange={onChange} value={dateValue} />
          </Col>
          <Col md={24}>
            <TimeSeriesChart/>
          </Col>
        </Row>

      ) : (<p>{TOASTER_MSG.prompt}</p>)}
    </>
  );
};

export default TimeSeries;
