import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../css/home.css";
import Review from "./review";
import Blog from "./bolgList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      foundCount: 0
    };
  }

  render() {
    return (
      <div>
        <section id="header" />

        <section id="feature">
          <Container>
            <Row>
              {/* lost */}
              <Col className="feature" xs="6" onClick={() => this.props.history.push('/addlostdog')}>
                <div className="lost-text">
                  <h2 className="font-title">แจ้งสุนัขหาย</h2>
                  <p className="font-detail">คำอธิบาย</p>
                </div>
                <div className="lost-icon">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="รูปแจ้งสุนัขหาย"
                  />
                </div>
              </Col>

              {/* found */}
              <Col className="feature" xs="6" className="center">
                <div className="found-icon">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="รูปแจ้งสุนัขหาย"
                  />
                </div>
                <div className="found-text">
                  <h2 className="font-title">สุนัขที่พบเจอ</h2>
                  <p className="font-detail">คำอธิบาย</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="caseSuccess">
          <Container>
            <h1 className="font-title">"กว่า {this.state.month} เดือน</h1>
            <h1 className="font-title right">
              เราพบสุนัขแล้ว {this.state.foundCount} ตัว"
            </h1>
          </Container>
        </section>

        <section id="review">
          <Review />
        </section>
        <hr />

        <section id="blog">
          <Container>
            <Blog />
          </Container>
        </section>

        <section id="donation">
          <Container>
            <h1 className="font-title">DONATION</h1>
          </Container>
        </section>

        <section id="footer">
          <Container>
            <h1 className="font-title">FOOTER</h1>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
