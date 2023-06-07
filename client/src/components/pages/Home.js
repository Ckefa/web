import { Divider, Layout } from "antd";
import axios from "axios";
import { useEffect } from "react";

import Dashboard from "../home/Dashboard";
import Landing from "../home/Landing";

function Home({ user, parent, currentTheme }) {
  useEffect(() => {
    if (user) {
      return;
    }

    async function fetchData() {
      console.log("checking user login status");
      try {
        const resp = await axios.get("/status");
        console.log(resp.data, resp.data.status === false);

        if (resp.data.status) {
          parent(resp.data.fname);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  });

  return (
    <Layout style={{ color: currentTheme ? "black" : "white" }}>
      <Landing />

      <Divider />

      <Dashboard />

      <Divider />
    </Layout>
  );
}
export default Home;
