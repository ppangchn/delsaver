import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../css/home.css";
import Review from "./review";
import Blog from "./bolgList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "3",
      foundCount: "10"
    };
  }

  render() {
    return (
      <div>
        <section id="header" />

        <section id="features">
          <Container>
            <Row>
              {/* lost */}
              <Col
                className="feature"
                xs="6"
                onClick={() => this.props.history.push("/addlostdog")}
              >
                <div className="lost-text">
                  <h2 className="font-title">แจ้งสุนัขหาย</h2>
                  <p className="font-detail">ฝากประวัติสุนัขหายและพลัดหลง</p>
                </div>
                <div className="lost-icon">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e614/5398/670a22f635b19c7400361256803c51d7?Expires=1546819200&Signature=LSsU5Q3HPIrNhV~6MCgFAyw46ShmdVNvzjZ-qtpL-S7LJwJA8rRvlInqkXVpLElcgIMKIqjWrAcHT4uTmHNPT5CMQ6MyCV1JhDzhMBwkTgNs~LLRj~mawTTYlTtUAHtygcpZdJphM77qidXlVr9XwEtLXAY-gW7~fp~c4Pjy-foBN0~hf8gmsrgeZH1hZ1jSrgBtvD3RugTooR1GyLMB4vpsJsFjbyZK9U8vumtIM8WdXTGLyDYZkolf24o0f2N7n-5LM4u0TqUTgmv1kgao0pBST1ulGb9P7NE2oR1D-YBDPmhAVVPZ3d1LSMcC9WjjSR4Zkn~jf~8CUtVaI3nFGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="รูปแจ้งสุนัขหาย"
                  />
                </div>
              </Col>

              {/* found */}
              <Col
                className="feature"
                xs="6"
                className="center"
                onClick={() => this.props.history.push("/addfounddog")}
              >
                <div className="found-icon">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f1f9/d89d/aa9aaec5b6c1a17822d9299158f0f1fc?Expires=1546819200&Signature=PFoU04kkb3zOUwsASI9Lli3XjJyi0JnWRhJgpAqKcOkEgcMB04oQK5IZJ5BmKZcc9ANPpR~GmTw4kmN0zZdSZGRK8dl-ibCTqJWqFAtR5-8Hz4hWdAWcOXD5kAvKB63TUJXRQmW1g0OZBve839bCXMV5if9~6kncNeTszCcHC-EXQfBjkd00DTJTGYckWAnge45Ld6GTvH2VdW1QKyoJyNTFH0QLAPUF-bvYjackbARqdflZQmAg8IK3BqWHd3cPZKDUQEP7DLjIl3eOx~IKA5rQp-CNzzm7IszB4oICJQgnypwo5pyGUzTI8Njsh6fMgVGagOxLX4YEYEe00NtAQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="รูปแจ้งสุนัขหาย"
                  />
                </div>
                <div className="found-text">
                  <h2 className="font-title">สุนัขที่พบเจอ</h2>
                  <p className="font-detail">พบสุนัขต้องสงสัยแจ้งได้ที่นี่</p>
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
            <h1 className="font-title">
              ร่วมเป็นส่วนหนึ่งในการส่งน้องหมากลับบ้าน
            </h1>
            <Button outline color="warning">บริจาค ></Button>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
