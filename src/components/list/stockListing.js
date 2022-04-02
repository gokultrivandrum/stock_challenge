import { useState, useMemo } from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { updateSelectedSymbols } from '../../store/selectedParams';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { TOASTER_MSG } from "../../utils/constants";

const StockListingItem = ({ data }) => {

  const dispatch = useDispatch();

  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Symbol',
      dataIndex: 'displaySymbol',
    },
    {
      title: 'Type',
      dataIndex: 'type'
    }
  ];

  const rowSelection ={
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length <= 3) {
        setSelectedRows(selectedRows);
        dispatch(updateSelectedSymbols({ selectedSymbols: selectedRows }))
      } else {
        message.info(TOASTER_MSG.max, 2);
      }
    },
    getCheckboxProps: (record) => {
      const newArray = selectedRows.filter((item) => item.description === record.description);
      let disabled = false;
      if(!newArray.length  && selectedRows.length > 2){
        disabled = true;
      }
      return {disabled};
    },
    hideSelectAll: true
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      rowKey="description"
      pagination={{ position: ['bottomCenter'] }}
      scroll={{ y: 515 }}
    />
  );
};

export default StockListingItem;