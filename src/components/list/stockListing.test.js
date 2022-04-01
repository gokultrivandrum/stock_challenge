import FreeNowListItem from './freeNowListItem';
import { Table } from 'antd';

import React from 'react';
import { shallow } from 'enzyme';
describe('FreeNowListItem', () => {
  it('should have the "table"', () => {
    const wrapper = shallow(
      <FreeNowListItem />
    );
    expect(wrapper.find('Table').length).toBe(1);
  })
  it('should have the "table" with data empty', () => {
    // Use the wrapped components
    const wrapper = shallow(
      <FreeNowListItem data={[]} />
    );
    expect(wrapper.find('Table').props().dataSource).toEqual([]);
  });
});