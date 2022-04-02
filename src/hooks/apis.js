import { useEffect, useState } from "react";

import { MENU_KEYS } from "../utils/constants";
import { SYMBOL_LIST, TIME_SERIES } from "../utils/endpoints";
import { customFetch } from "../services/fetch";

export const useGetData = ({ mode }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === MENU_KEYS.stockList) {
      getStockData();
    } else {
      getCompanyData();
    }
  }, [mode]);

  const getStockData = async () => {
    setLoading(true);
    const response = await customFetch({
      apiEndpoint: SYMBOL_LIST,
    });
    setData(response?.poiList);
    setLoading(false);
  };

  const getCompanyData = async () => {
    setLoading(true);
    const response = await customFetch({
      apiEndpoint: TIME_SERIES,
    });
    setData(response?.placemarks);
    setLoading(false);
  };

  return { data, loading };
};
