import StockListingItem from './stockListing';
import React from 'react';
import { shallow } from 'enzyme';

describe('FreeNowListItem', () => {
  it('should have the "table"', () => {
    const wrapper = shallow(
      <StockListingItem />
    );
    expect(wrapper.find('Table').length).toBe(1);
  })
  it('should have the "table" with data empty', () => {
    // Use the wrapped components
    const wrapper = shallow(
      <StockListingItem data={[]} />
    );
    expect(wrapper.find('Table').props().dataSource).toEqual([]);
  });
});