import React, { Component } from "react";
import { Container, Row, Col ,Input} from "reactstrap";
import Select from 'react-select'
import LostDogList from './LostDogList'
import "../../css/font.css";
import "../../css/Layout.css";
class ViewLostDog extends Component {
    constructor() {
        super();
        this.state = {
            listOfColor:[],
            listOfSelectedColor:[],
            listOfKind: [],
            address:''
        }
    }
    handleAddress(e) {
        this.setState({address : e.target.value})
    } 
  render() {
      const {listOfKind} = this.state;
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">รวมสุนัขที่ถูกแจ้งหาย</Col>
        </Row>
        <Row className="center">
          <Col className="font-title bold">ระบุข้อมูลเพิ่มเติม</Col>
          {/* <Col md="0" className="font-title">เรียงตาม</Col> */}
        </Row>
        <Row className="center">
          <Col md="2" className="font-title bold">สีของสุนัข</Col>
        </Row>
        <Row className="center">
          <Col md="2" className="font-title bold">พันธุ์ของสุนัข</Col>
          <Col sm="2" md="3"><Select options={listOfKind}/></Col>
        </Row>
        <Row className="center">
          <Col md="2" className="font-title bold">สถานที่ที่พบสุนัขล่าสุด</Col>
          <Col sm="2" md="3"><Input onChange={(e) => this.handleAddress(e)}/></Col>
        </Row>
        <LostDogList />
      </Container>
    );
  }
}

export default ViewLostDog;
