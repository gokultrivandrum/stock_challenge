import StockListingItem from "./stockListing";

import { TOASTER_MSG } from "../../utils/constants";

const CustomList = ({  data }) => {
  return (
    <>
      {data ? (
        <StockListingItem data={data} />
      ) :  (<p>{TOASTER_MSG.loading}</p>)}
    </>
  );
};

export default CustomList;
