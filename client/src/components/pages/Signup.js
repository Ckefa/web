import { Layout, Form, Typography, Input, Button } from "antd";
import { TiUser } from "react-icons/ti";
import { FcKey } from "react-icons/fc";

function Signup() {
  const submitForm = (values) => {
    console.log(values);
  };
  return (
    <Layout
      style={{
        alignItems: "center",
      }}
    >
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

        <Form.Item label="First Name">
          <Input
            name="fname"
            placeholder="first name"
            allowClear
            required
          ></Input>
        </Form.Item>

        <Form.Item label="Last Name">
          <Input
            name="fname"
            placeholder="last name"
            allowClear
            required
          ></Input>
        </Form.Item>

        <Form.Item label="Email">
          <Input
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
            prefix={<FcKey />}
            name="passwd"
            placeholder="Password"
            type="password"
            allowClear
            required
          ></Input>
        </Form.Item>

        <Form.Item label="Confirm Password">
          <Input
            prefix={<FcKey />}
            name="cpasswd"
            placeholder="Confirm Password"
            type="password"
            allowClear
            required
          ></Input>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
    </Layout>
  );
}

export default Signup;
