import Lottie from "lottie-react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdHome } from "react-icons/md";
import Avatar from "../../icons/119479-avatars-multiple.json";

import { Drawer, Dropdown, Menu, Space } from "antd";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

import { useState } from "react";

function Head({ currentTheme, setTheme, user }) {
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
		{
			key: "3",
			label: <a href="/signup">Register</a>,
			disabled: user ? true : false,
		},
	];

	const navItems = [
		{
			label: <Link onClick={() => setDrawer(false)}>Latest</Link>,
			key: "latest",
		},
		{
			label: <Link onClick={() => setDrawer(false)}>Movies</Link>,
			key: "movies",
		},
		{
			label: <Link onClick={() => setDrawer(false)}>Tv Shows</Link>,
			key: "shows",
		},

		{
			label: <Link onClick={() => setDrawer(false)}> Animations</Link>,
			key: "animes",
		},
	];

	return (
		<div className="header">
			<div className="home">
				<div className="gohome">
					<Link to={"/"}>
						<MdHome />
					</Link>
				</div>

				<div className="brand">
					<h1>
						KENYA<span style={{ color: "red" }}>FLIX</span>
					</h1>
				</div>
			</div>
			<div className="navbar">
				<Space>
					{currentTheme && (
						<MdDarkMode onClick={() => setTheme(!currentTheme)}></MdDarkMode>
					)}

					{!currentTheme && (
						<CiLight onClick={() => setTheme(!currentTheme)}></CiLight>
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
						<TiThMenu onClick={() => setDrawer(!drawer)}></TiThMenu>
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
