import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Select from 'react-select'
import '../../../css/AddLostDog.css'
import '../../../css/Layout.css'
class FirstStep extends Component {
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
        ],kind:'',
        listOfSize:[{value:'เล็ก',label:'เล็ก'},{value:'กลาง',label:'กลาง'},{value:'ใหญ่',label:'ใหญ่'}],
        size:''
        }
    }
    handleSize(e) {
        this.setState({size:e})
    }
    handleKind(e) {
        this.setState({kind:e})
    }
    nextPage() {
        this.props.history.push('/addlostdog/2')
    }
  render() {
    const {listOfKind,kind,listOfSize,size} = this.state
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขของคุณ</Col>
        </Row>
        <Row className="center mt1 mb2">
            <Col md="0" className="baractive ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
        </Row>
        <Row>
          <Col md="4"><img style={{width:"20vw",height:"15vw"}}src="https://imgur.com/ALz8HpE.jpg"/></Col>
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
              <Col md="3"><Select options={listOfKind} value={kind} onChange={(e) => this.handleKind(e)}/></Col>
            </Row>
            <Row className="mt1 center">
              <Col md="2" className="font-detail bold">
                ขนาด
              </Col>
              <Col md="3"><Select options={listOfSize} value={size} onChange={(e) => this.handleSize(e)}/></Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="center mt2">
            <Col><Button onClick={() => this.nextPage()}>ถัดไป</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default FirstStep;
