import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../css/home.css";
import Review from "./review"

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      month: 0,
      foundCount: 0
    };
  }

  render() {
    return (
      <div>
        <section id="feature">
          <Container>
            <Row>
              {/* lost */}
              <Col xs="6" className="center">
                <Link to="\" className="link">
                  <div className="lost-text">
                    <h2 className="font-title">แจ้งสุนัขหาย</h2>
                    <p className="font-detail">คำอธิบาย</p>
                  </div>
                  <div className="lost-icon">
                    <img src="https://via.placeholder.com/100" alt="รูปแจ้งสุนัขหาย" />
                  </div>
                </Link>
              </Col>

              {/* found */}
              <Col xs="6" className="center">
                <Link to="\" className="link">
                  <div className="found-icon">
                    <img src="https://via.placeholder.com/100" alt="รูปแจ้งสุนัขหาย" />
                  </div>
                  <div className="found-text">
                    <h2 className="font-title">สุนัขที่พบเจอ</h2>
                    <p className="font-detail">คำอธิบาย</p>
                  </div>
                </Link>
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
        </section><hr/>
      </div>
    );
  }
}

export default Home;
