import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Select from 'react-select'
import '../../../css/AddLostDog.css'
import '../../../css/Layout.css'
class AddFoundDog extends Component {
    constructor() {
        super()
        this.state = {
            listOfKind : [{value:'ชิวาวา',label:'ชิวาวา'},
            {value:'พุดเดิ้ล',label:'พุดเดิ้ล'},
            {value:'พุดเดิ้ล',label:'พุดเดิ้ล'},
            {value:'โกลเด้นรีทรีฟเวอร์',label:'โกลเด้นรีทรีฟเวอร์'},
            {value:'ปอมเมอเรเนี่ยน',label:'ปอมเมอเรเนี่ยน'},
            {value:'ไซบีเรียน ฮัสกี้',label:'ไซบีเรียน ฮัสกี้'},
            {value:'ปั๊ก',label:'ปั๊ก'},
            {value:'ชิสุ',label:'ชิสุ'},
        ],kind:''
        }
        
    }
    handleKind(e) {
        this.setState({kind:e})
    }
    returnToFoundDogPage() {
        this.props.history.push('/viewfounddog')
    }
  render() {
      const {listOfKind,kind} = this.state
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขที่คุณพบเจอ</Col>
        </Row>
        <Row className="center mt1 mb2">
            <Col md="0" className="baractive ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
        </Row>
        <Row className="center">
          <Col md="4" className="center"><img style={{width:'20rem',height:'20rem'}}src="https://imgur.com/CqsiQQc.jpg"/></Col>
          <Col md="6">
            <Row className="mt1 center">
              <Col className="font-detail bold">ข้อมูลทั่วไปของสุนัข</Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                สีของสุนัข
              </Col>
              <div className="sq-box mr-sq-box c1" />
       <div className="sq-box mr-sq-box c2" />
       <div className="sq-box mr-sq-box c3" />
       <div className="sq-box mr-sq-box c4" />
       <div className="sq-box mr-sq-box c5" />
       <div className="sq-box mr-sq-box c6" />
       <div className="sq-box mr-sq-box c7" />
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                พันธุ์
              </Col>
              <Col md="3"><Select options={listOfKind} value={kind} onChange={(e) => this.handleKind(e)}/></Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                ขนาด
              </Col>
              <Col md="3"><Select /></Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="center mt2">
            <Col><Button onClick={() => this.returnToFoundDogPage()} color="yellow">ตกลง</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default AddFoundDog;
