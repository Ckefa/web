function Signup() {



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
          Register
        </Button>
      </Form>
    </Layout>
  );
}
