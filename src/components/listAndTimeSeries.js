import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "antd";

import List from "./list";
import TimeSeries from "./timeSeries";
import { getStockList } from '../store/stock'

// import { useGetData } from "../hooks/apis";

const ListAndTimeSeries = () => {

  const dispatch = useDispatch();
  const { stock } = useSelector(state => state.stock);

  useEffect(() => {
    dispatch(getStockList(''))
  }, []);

  return (
    <Row>
      <Col md={14}>
        <List data={stock} />
      </Col>
      <Col md={10}>
        <TimeSeries />
      </Col>
    </Row>
  );
};

export default ListAndTimeSeries;
