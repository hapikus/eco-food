import React from "react";
import { Outlet, Link } from "react-router-dom";

import {
  CloudServerOutlined,
  FileTextOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout as LayoutAntd, Menu, Avatar, theme } from "antd";
import { useState } from "react";

import styles from "./layout.module.css";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/">News</Link>, "1", <FileTextOutlined />),
  getItem(
    <Link to="/food-table">Food table</Link>,
    "2",
    <CloudServerOutlined />
  ),
  getItem(<Link to="/faq">FAQ</Link>, "sub1", <QuestionOutlined />),
];

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <LayoutAntd
        style={{
          minHeight: "100vh",
        }}
      >
        <LayoutAntd.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className={styles.logoCont}>
            <Avatar
              src="https://media.cnn.com/api/v1/images/stellar/prod/190923112717-greta-thunberg-unga-climate-change.jpg?q=w_1620,h_1080,x_150,y_0,c_crop"
              size={150}
              />
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </LayoutAntd.Sider>
        <LayoutAntd className="site-layout">
          <LayoutAntd.Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <LayoutAntd.Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            ></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </LayoutAntd.Content>
          <LayoutAntd.Footer
            style={{
              textAlign: "center",
            }}
          >
            ECO Food © 2023
          </LayoutAntd.Footer>
        </LayoutAntd>
      </LayoutAntd>
    </>
  );
};

export default Layout;
