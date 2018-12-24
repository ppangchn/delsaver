import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Select from 'react-select'
import '../../../css/AddLostDog.css'
import '../../../css/Layout.css'
class FirstStep extends Component {
    nextPage() {
        this.props.history.push('/addlostdog/2')
    }
  render() {
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขของคุณ</Col>
        </Row>
        <Row className="center mt1">
            <Col md="0" className="baractive ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
            <Col md="0" className="bar  ml-2 mr-2"></Col>
        </Row>
        <Row className="mt2">
          <Col className="center" >ข้อมูลเฉพาะของสุนัข</Col>
          </Row>
        <Row className="center">
            <Col><Button onClick={() => this.nextPage()}>ถัดไป</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default FirstStep;
