import React, { Component } from "react";
import { Container, Row, Col, Button ,Input} from "reactstrap";
import "../../../css/AddLostDog.css";
import "../../../css/Layout.css";
class SecondStep extends Component {
    constructor() {
        super()
        this.state = {
            address : 'คณะเทคโนโลยีสารสนเทศ เขตลาดกระบัง จังหวัดกรุงเทพ'
        }
    }
    returnToLostDogPage() {
    this.props.history.push("/viewlostdog");
  }
  render() {
      const {address} = this.state;
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขของคุณ</Col>
        </Row>
        <Row className="center mt1 mb2">
          <Col md="0" className="bar ml-2 mr-2" />
          <Col md="0" className="bar  ml-2 mr-2" />
          <Col md="0" className="baractive  ml-2 mr-2" />
        </Row>
        <Row  className="mt2 mb1">
            <Col>สถานที่ที่พบสุนัขล่าสุด</Col>
        </Row>
        <Row className="mb1">
            <Col> <Input onChange={e => this.handleAddress(e)} value={address}/></Col>
        </Row>
        <Row className="mb1 center">
            <Col><img src="http://share.olanlab.com/userfiles/olan/images/google/google_maps/googlemap_marker02.jpg"/></Col>
        </Row>
        <Row className="center mt2"><Col><Button color="brown" onClick={() => this.returnToLostDogPage()}>ตกลง</Button></Col></Row>
      </Container>
    );
  }
}

export default SecondStep;
