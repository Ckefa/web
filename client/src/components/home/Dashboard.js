import { Row, Col, Carousel } from "antd";

function Dashboard() {
  let trending = [];

  for (let i = 1; i < 10; i++) {
    trending.push(require("../../icons/movies/" + i + ".jpeg"));
  }
  console.log(trending);

  return (
    <Row gutter={[12, 12]}>
      <Col md={12} lg={8}>
        <div className="movtit">Movies</div>
        <Carousel autoplay>
          {trending.map((trend, index) => (
            <div key={index}>
              <img
                src={trend}
                alt=""
                style={{
                  width: "500px",
                  height: "300px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </Carousel>
      </Col>

      <Col md={12} lg={8}>
        <div className="movtit">Series</div>
        <Carousel autoplay>
          {trending.map((trend, index) => (
            <div key={index}>
              <img
                src={trend}
                alt=""
                style={{
                  width: "500px",
                  height: "300px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}

export default Dashboard;
