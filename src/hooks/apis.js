import { useEffect, useState } from "react";

import { MENU_KEYS } from "../utils/constants";
import { FREE_NOW_LIST, SHARE_NOW_LIST } from "../utils/endpoints";
import { customFetch } from "../services/fetch";

export const useGetData = ({ mode }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("mode", mode)
    if (mode === MENU_KEYS.freeNow) {
      getFreeNowData();
    } else {
      getShareNowData();
    }
  }, [mode]);

  const getFreeNowData = async () => {
    setLoading(true);
    const response = await customFetch({
      apiEndpoint: FREE_NOW_LIST,
    });
    setData(response?.poiList);
    setLoading(false);
  };

  const getShareNowData = async () => {
    setLoading(true);
    const response = await customFetch({
      apiEndpoint: SHARE_NOW_LIST,
    });
    setData(response?.placemarks);
    setLoading(false);
  };

  return { data, loading };
};
