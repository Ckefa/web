import "./App.css";
import "antd/dist/reset.css";
import Home from "./components/pages/Home";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import { Header, Content } from "antd/es/layout/layout";

import Sider from "antd/es/layout/Sider";
import { FcAbout, FcHome } from "react-icons/fc";
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";

import Login from "./components/pages/Login";
import Head from "./components/common/Head";

function App() {
  const [currentTheme, setTheme] = useState(true);
  const [collapsed, setCollapsed] = useState("md");
  const [user, setUser] = useState(null);

  const moreChildren = [
    { label: "Main menu", key: "menu" },
    { label: "Main Content", key: "content" },
  ];
  const siderItems = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <FcHome size={20} />,
    },
    {
      label: "More",
      key: "more",
      icon: <MdOutlineUnfoldMoreDouble size={20} />,
      children: moreChildren,
    },
    { label: "About us", key: "about", icon: <FcAbout size={20} /> },
  ];

  const light = {
    token: {
      coorBgBase: "white",
    },
  };

  const dark = {
    token: {
      colorBgBase: "#2a2d36",
      colorTextBase: "white",
      colorBorder: "#95a7cf",
    },
  };

  const runChild = (arg) => {
    console.log(arg);
    setUser(arg);
  };

  return (
    <ConfigProvider theme={currentTheme ? light : dark}>
      <Layout className="container" theme={{}}>
        <Header
          style={{
            backgroundColor: currentTheme ? "white" : "black",
          }}
        >
          <Head
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            user={user}
            currentTheme={currentTheme}
            setTheme={setTheme}
          />
        </Header>

        <Layout>
          <Sider
            theme="light"
            breakpoint={collapsed}
            collapsedWidth="0"
          >
            <Menu mode="inline" items={siderItems}></Menu>
          </Sider>

          <Content className="content">
            <Routes>
              <Route
                path="/"
                element={<Home user={user} parent={runChild} />}
              ></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
