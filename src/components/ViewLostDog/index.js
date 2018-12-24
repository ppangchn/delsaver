import React, { Component } from "react";
import { Container, Row, Col ,Input,Button} from "reactstrap";
import {Link} from 'react-router-dom'
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
    goPathAddLostDog() {
        this.props.history.push('/addlostdog')
    }
  render() {
      const {listOfKind} = this.state;
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">รวมสุนัขที่ถูกแจ้งหาย</Col>
        </Row>
        <Row className="mt1 center">
          <Col className="font-detail bold">ระบุข้อมูลเพิ่มเติม</Col>
          {/* <div className="font-detail">เรียงตามสถานที่และเวลาล่าสุด</div> */}
        </Row>
        <Row className="mt1 center">
          <Col md="2" className="font-detail bold">สีของสุนัข</Col>
        </Row>
        <Row className="mt1 center">
          <Col md="2" className="font-detail bold">พันธุ์ของสุนัข</Col>
          <Col sm="2" md="3"><Select options={listOfKind}/></Col>
        </Row>
        <Row className="mt1 center">
          <Col md="2" className="font-detail bold">สถานที่ที่พบสุนัขล่าสุด</Col>
          <Col sm="2" md="3"><Input onChange={(e) => this.handleAddress(e)}/></Col>
        </Row>
        <LostDogList />
        <Button color="danger" >
          <Link to="/addlostdog" className="no-txt-dec">แจ้งสัตว์เลี้ยงหายที่นี่</Link>
        </Button>
      </Container>
    );
  }
}

export default ViewLostDog;
