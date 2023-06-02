import { Divider, Layout } from "antd";
import axios from "axios";
import { useEffect } from "react";
import AdSense from "react-adsense";

import Dashboard from "../home/Dashboard";

function Home({ user, parent }) {
  useEffect(() => {
    if (user) {
      return;
    }

    async function fetchData() {
      console.log("checking user status");
      try {
        const resp = await axios.get("http://localhost/status");
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
    <Layout>
      <Dashboard />

      <Divider />

      <AdSense.Google
        client="ca-pub-8387385583486694"
        slot="9891954158"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </Layout>
  );
}
export default Home;
