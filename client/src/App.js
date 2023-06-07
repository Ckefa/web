import "antd/dist/reset.css";
import "./App.css";

import { ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Head from "./components/common/Head";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Series from "./components/pages/Series";
import Signup from "./components/pages/Signup";

function App() {
	const [currentTheme, setTheme] = useState(true);
	const [collapsed, setCollapsed] = useState("md");
	const [user, setUser] = useState(null);

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
					<Content className="content">
						<Routes>
							<Route
								path="/"
								element={
									<Home
										currentTheme={currentTheme}
										user={user}
										parent={runChild}
									/>
								}
							></Route>

							<Route path="/login" element={<Login />}></Route>

							<Route path="/signup" element={<Signup />}></Route>

							<Route path="/series" element={<Series />}></Route>
						</Routes>
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
