import StockListingItem from "./stockListing";

import { MENU_KEYS } from "../../utils/constants";

const CustomList = ({  data, onListItemClick }) => {
  return (
    <>
      {data ? (
        <StockListingItem data={data} />
      ) :  (
        <p>
          Loading...
        </p>)}
    </>
  );
};

export default CustomList;
