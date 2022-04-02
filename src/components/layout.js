import { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import { MENU_KEYS, MENU_LABELS } from "../utils/constants";

const { Header, Content } = Layout;

const CustomLayout = ({ children, onLayoutChanged }) => {
  const [activeMenu, setActiveMenu] = useState(MENU_KEYS.stockList);

  useEffect(() => {
    onLayoutChanged?.(activeMenu);
  }, [activeMenu, onLayoutChanged]);

  // const onMenuChanged = (value) => {
  //   const { key } = value;
  //   setActiveMenu(key);
  // };

  const showMenuName = () => {
    return activeMenu === MENU_KEYS.stockList
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={MENU_KEYS.stockList}
          mode="horizontal"
        >
          <Menu.Item key={MENU_KEYS.stockList}>{MENU_LABELS.stockList}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {/* <Breadcrumb.Item>{showMenuName()}</Breadcrumb.Item> */}
          <Breadcrumb.Item>{MENU_LABELS.stockList}</Breadcrumb.Item>
        </Breadcrumb>
        {children}
      </Content>
    </Layout>
  );
};

export default CustomLayout;
