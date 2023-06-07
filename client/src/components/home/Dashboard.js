import { Carousel, Col, Row, Table } from "antd";

function Dashboard() {
	let trending = [];

	for (let i = 1; i < 10; i++) {
		trending.push(require("../../icons/movies/" + i + ".jpeg"));
	}

	const columns = [
		{
			title: "Pos",
			dataIndex: "pos",
			key: "pos",
		},
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Ratings",
			dataIndex: "ratings",
			key: "ratings",
		},
	];

	const dataSource = [
		{
			key: 1,
			pos: 1,
			title: "Mandalorian",
			ratings: 10,
		},
		{
			key: 2,
			pos: 2,
			title: "Game of Thrones",
			ratings: 9.8,
		},
		{
			key: 3,
			pos: 3,
			title: "The Magicians",
			ratings: 9.7,
		},
		{
			key: 4,
			pos: 4,
			title: "Night Agent",
			ratings: 9.6,
		},
		{
			key: 5,
			pos: 5,
			title: "Who Are We Running From",
			ratings: 10,
		},
	];

	return (
		<div className="dashboard">
			<Row gutter={[60, 20]}>
				<Col md={5} lg={5}>
					<div className="dashitem">
						<div className="title">Movies</div>
						<Carousel autoplay>
							{trending.map((trend, index) => (
								<div key={index}>
									<img src={trend} alt="" />
								</div>
							))}
						</Carousel>
					</div>
				</Col>

				<Col md={5} lg={5}>
					<div className="dashitem">
						<div className="title">Series</div>
						<Carousel autoplay>
							{trending.map((trend, index) => (
								<div key={index}>
									<img src={trend} alt="" />
								</div>
							))}
						</Carousel>
					</div>
				</Col>

				<Col md={5} lg={5}>
					<div className="dashitem">
						<div className="title">Animations</div>
						<Carousel autoplay>
							{trending.map((trend, index) => (
								<div key={index}>
									<img src={trend} alt="" />
								</div>
							))}
						</Carousel>
					</div>
				</Col>

				<Col md={9} lg={8}>
					<div className="dashitem">
						<div className="title">Weekly Top Rankings.</div>
						<Table columns={columns} dataSource={dataSource}></Table>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Dashboard;
