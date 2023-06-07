import { Button, Col, Input, Layout, Row, Space } from "antd";

function Landing() {
	return (
		<Layout>
			<Space direction="vertical">
				<div>
					<Row gutter={[20, 20]}>
						<Col span={24}>
							<h2>The Best Movies Libarary in Kenya.</h2>
						</Col>

						<Col sm={24} xs={24} md={15}>
							<Input.Search
								type="primary"
								placeholder="search for your favorite movies..."
								allowClear
							/>
						</Col>
					</Row>
				</div>

				<div>
					<Row>
						<Col span={8}>
							<Space>
								<span>Make a Request?</span>
								<div>
									<Space>
										<Input
											placeholder="Enter your requiest."
											allowClear
										></Input>
										<Button type="primary">request</Button>
									</Space>
								</div>
							</Space>
						</Col>
					</Row>
				</div>
			</Space>
		</Layout>
	);
}

export default Landing;
