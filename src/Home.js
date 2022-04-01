import { useState } from "react";

import Layout from "./components/layout";
import ListAndMap from "./components/listAndTimeSeries";
import { MENU_KEYS } from "./utils/constants";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(MENU_KEYS.freeNow);

  const onLayoutChanged = (val) => {
    setActiveMenu(val);
  };

  return (
    <Layout onLayoutChanged={onLayoutChanged}>
      <ListAndMap mode={activeMenu} />
    </Layout>
  );
};

export default Home;
