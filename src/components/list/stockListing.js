import { useState } from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { getTimeSeries } from '../../store/timeSeries';
import { updateSelectedSymbols } from '../../store/selectedParams';
import { useDispatch } from 'react-redux';
import { message } from 'antd';

const StockListingItem = ({ data }) => {

  const [selectedRecordArray, setSelectedRecords] = useState([]);

  const dispatch = useDispatch();

  const onListItemClick = selectedRecord => {
    if(selectedRecordArray.length <=  2){
      setSelectedRecords(prev => [...prev, selectedRecordArray]);
      dispatch(updateSelectedSymbols({selectedSymbols:selectedRecord}))
    }else{
       message.info("Maximum  Symbols Selected",2);
   }
  }
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Symbol',
      dataIndex: 'displaySymbol',
      key: 'displaySymbol',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type'
    }
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={(record) => {
        return {
          onClick: event => onListItemClick(record),
        };
      }}
      pagination={{ position: ['bottomCenter'] }}
      scroll={{ y: 515 }}
    />
  );
};

export default StockListingItem;