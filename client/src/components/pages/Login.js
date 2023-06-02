import Layout from "antd/es/layout/layout";
import { Navigate } from "react-router-dom";
import { Form, Input, Button, Typography, notification } from "antd";
import { TiUser } from "react-icons/ti";
import { FcKey } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [redirect, setReditect] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [user, setUser] = useState(null);
  const [passwd, SetPasswd] = useState(null);

  const addUser = (e) => {
    setUser(e.target.value);
  };

  const addPasswd = (e) => {
    SetPasswd(e.target.value);
  };

  const submitForm = async (formData) => {
    console.log(formData);

    const notify = (status) => {
      console.log(status ? "Login Success" : "Login Failed");
      api[status ? "success" : "error"]({
        message: status ? "Login Success" : "Login Failed",
        description: status ? "you can now enjoy!" : "Please try again!!!",
        duration: 10,
      });
    };

    try {
      const response = await axios.post("/login", {
        email: user,
        passwd: passwd,
      });

      if (response.data === "login success") {
        notify(true);
        setReditect(true);
      } else {
        notify(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to={{ pathname: "/", state: { redirect } }} />;
  }

  return (
    <Layout
      style={{
        alignItems: "center",
      }}
    >
      {contextHolder}
      <Form
        onFinish={submitForm}
        style={{
          width: "34vw",
        }}
        layout="vertical"
      >
        <Typography.Title
          style={{
            fontSize: "3vw",
          }}
        >
          Login to access full services
        </Typography.Title>
        <Form.Item label="Email">
          <Input
            onChange={addUser}
            prefix={<TiUser />}
            name="email"
            placeholder="Email"
            type="email"
            allowClear
            required
          ></Input>
        </Form.Item>
        <Form.Item label="Password">
          <Input
            onChange={addPasswd}
            prefix={<FcKey />}
            name="passwd"
            placeholder="Password"
            type="password"
            allowClear
            required
          ></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </Layout>
  );
}

export default Login;
