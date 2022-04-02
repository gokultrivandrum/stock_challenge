import 'antd/dist/antd.css';
import { Table } from 'antd';
import { updateSelectedSymbols } from '../../store/selectedParams';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { TOASTER_MSG } from "../../utils/constants";

const StockListingItem = ({ data }) => {

  const dispatch = useDispatch();

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
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length <= 3) {
        dispatch(updateSelectedSymbols({ selectedSymbols: selectedRows }))
      } else {
        message.info(TOASTER_MSG.max, 2);
      }
    }
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