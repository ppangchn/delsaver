import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import '../../../css/AddLostDog.css'
import '../../../css/Layout.css'
class ThirdStep extends Component {
  render() {
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขของคุณ</Col>
        </Row>
        <Row className="center mt-2 ">
            <Col md="0" className="bar ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
            <Col md="0" className="baractive  ml-2 mr-2"></Col>
        </Row>
        <Row>
          <Col>อัพโหลดรูปภาพของสุนัข</Col>
          <Col>
            <Row className="mt1 center">
              <Col className="font-detail bold">ข้อมูลทั่วไปของสุนัข</Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                สีของสุนัข
              </Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                พันธุ์
              </Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                ขนาด
              </Col>
            </Row>
          </Col>
        </Row>

        <Button onClick={() => this.goPathThirdStep()}>
          ตกลง
        </Button>
      </Container>
    );
  }
}

export default ThirdStep;
