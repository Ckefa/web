import Lottie from "lottie-react";
import Avatar from "../../icons/119479-avatars-multiple.json";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import { Menu, Space, Dropdown, Drawer } from "antd";
import { TiArrowDown, TiThMenu } from "react-icons/ti";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useState } from "react";

function Head({ currentTheme, setTheme, user, collapsed, setCollapsed }) {
  const [drawer, setDrawer] = useState(false);

  const items = [
    {
      key: "user",
      label: user ? "user: " + user : "please login",
    },
    {
      key: "1",
      label: <Link to="/login">login</Link>,
      icon: <FiLogIn size={18} />,
      disabled: user ? true : false,
    },
    {
      key: "2",
      label: <a href="/logout">Logout</a>,
      icon: <FiLogOut size={18} />,
      disabled: user ? false : true,
    },
  ];

  const navItems = [
    {
      label: <Link onClick={() => setDrawer(false)}>Movies</Link>,
      key: "movies",
    },
    {
      label: <Link onClick={() => setDrawer(false)}>Tv Shows</Link>,
      key: "shows",
    },
    {
      label: <Link onClick={() => setDrawer(false)}>Latest</Link>,
      key: "latest",
    },
    {
      label: (
        <Link to="/login" onClick={() => setDrawer(false)}>
          Animations
        </Link>
      ),
      key: "animes",
    },
  ];

  return (
    <div className="header">
      <div>
        <TiThMenu
          onClick={() => setCollapsed(collapsed === "md" ? "xs" : "md")}
          size={30}
        />
        <div className="brand">MILITAN ENT</div>
      </div>
      <div className="navbar">
        <Space>
          {currentTheme && (
            <MdDarkMode
              size={35}
              onClick={() => setTheme(!currentTheme)}
            ></MdDarkMode>
          )}

          {!currentTheme && (
            <CiLight
              type="primary"
              size={35}
              onClick={() => setTheme(!currentTheme)}
            ></CiLight>
          )}
          <div className="mobileHidden">
            <Menu
              style={{
                color: currentTheme ? "black" : "white",
                backgroundColor: currentTheme ? "white" : "black",
              }}
              mode="horizontal"
              items={navItems}
            />
          </div>

          <Dropdown menu={{ items }} className="avatar">
            <Lottie animationData={Avatar}></Lottie>
          </Dropdown>

          <div className="mobileVisible">
            <TiArrowDown onClick={() => setDrawer(!drawer)} size={35} />
          </div>

          <Drawer open={drawer} onClose={() => setDrawer(!drawer)}>
            <Menu items={navItems} />
          </Drawer>
        </Space>
      </div>
    </div>
  );
}

export default Head;
