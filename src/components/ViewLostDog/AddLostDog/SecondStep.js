import React, { Component } from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
import Select from "react-select";
import "../../../css/AddLostDog.css";
import "../../../css/Layout.css";
class SecondStep extends Component {
  constructor() {
    super();
    this.state = {
      listOfEar: [
        { value: "หูตั้ง", label: "หูตั้ง" },
        { value: "หูพับ", label: "หูพับ" },
        { value: "ตัดหู", label: "ตัดหู" },
        { value: "ดามหู", label: "ดามหู" }
      ],
      listOfTongue: [
        { value: "สั้น", label: "สั้น" },
        { value: "ยาว", label: "ยาว" },
        { value: "ดำ", label: "ดำ" },
        { value: "มีจุดดำ", label: "มีจุดดำ" }
      ],
      listOfTail: [
        { value: "กุด", label: "กุด" },
        { value: "ยาว", label: "ยาว" },
        { value: "สั้น", label: "สั้น" }
      ],
      listOfHair: [
        { value: "หยัก", label: "หยัก" },
        { value: "หยิก", label: "หยิก" },
        { value: "เกลียว", label: "เกลียว" }
      ],
      listOfFace: [
        { value: "ย่น", label: "ย่น" },
        { value: "ยาว", label: "ยาว" },
        { value: "สั้น", label: "สั้น" }
      ],
      listOfHealthProblem: [
        { value: "ปกติ", label: "ปกติ" },
        { value: "โรคผิวหนัง", label: "โรคผิวหนัง" },
        { value: "ขนร่วง", label: "ขนร่วง " },
        { value: "ซูบผอม", label: "ซูบผอม" }
      ],
      listOfOptional: [
        { value: "ปลอกคอสองชั้น", label: "ปลอกคอสองชั้น" },
        { value: "ปลอกคอทั่วไป", label: "ปลอกคอทั่วไป" },
        { value: "ตะกร้อ", label: "ตะกร้อ" },
        { value: "เสื้อ", label: "เสื้อ" },
        { value: "ไม่มี", label: "ไม่มี" }
      ],
      unique: "",
      ear: "",
      tongue: "",
      tail: "",
      hair: "",
      face: "",
      healthProblem: "",
      optional: ""
    };
  }
  handleEar(e) {
      this.setState({ear:e})
  }
  handleTongue(e) {
    this.setState({tongue:e})
}
handleHair(e) {
    this.setState({hair:e})
}
handleTail(e) {
    this.setState({tail:e})
}
handleFace(e) {
    this.setState({face:e})
}
handleHealthProblem(e) {
    this.setState({healthProblem:e})
}
handleOptional(e) {
    this.setState({optional:e})
}
handleUnique(e) {
    this.setState({unique:e.target.value})
}
  nextPage() {
    this.props.history.push("/addlostdog/3");
  }
  render() {
    const {
      listOfEar,
      listOfFace,
      listOfHair,
      listOfHealthProblem,
      listOfOptional,
      listOfTail,
      listOfTongue,
      ear,
      face,
      hair,
      healthProblem,
      optional,
      tail,
      tongue,
      unique
    } = this.state;
    return (
      <Container className="mt2">
        <Row className="center">
          <Col className="font-title title bold">กรอกข้อมูลสุนัขของคุณ</Col>
        </Row>
        <Row className="center mt1 mb2">
          <Col md="0" className="bar ml-2 mr-2" />
          <Col md="0" className="baractive  ml-2 mr-2" />
          <Col md="0" className="bar  ml-2 mr-2" />
        </Row>
        <Row className="mt2 mb2">
          <Col className="center">ข้อมูลเฉพาะของสุนัข</Col>
        </Row>
        <Row className="center mt1">
          <Col md="2">ลักษณะหู</Col>
          <Col md="2">
            <Select options={listOfEar} value={ear} onChange={(e) => this.handleEar(e)} className="font-detail"/>
          </Col>
          <Col md="2">ปัญหาสุขภาพ</Col>
          <Col md="2">
            <Select options={listOfHealthProblem} value={healthProblem} onChange={(e) => this.handleHealthProblem(e)} className="font-detail"/>
          </Col>
        </Row>
        <Row className="center mt1">
          <Col md="2">ลักษณะลิ้น</Col>
          <Col md="2">
            <Select options={listOfTongue} value={tongue} onChange={(e) => this.handleTongue(e)} className="font-detail"/>
          </Col>
          <Col md="2">อุปกรณ์เสริม</Col>
          <Col md="2">
            <Select options={listOfOptional} value={optional} onChange={(e) => this.handleOptional(e)} className="font-detail"/>
          </Col>
        </Row>
        <Row className="center mt1">
          <Col md="2">ลักษณะหาง</Col>
          <Col md="2">
            <Select options={listOfTail} value={tail} onChange={(e) => this.handleTail(e)} className="font-detail"/>
          </Col>
          <Col md="4">ลักษณะเด่นเพิ่มเติมของสุนัข(ถ้ามี)</Col>
        </Row>
        <Row className="center mt1">
          <Col md="2">ลักษณะขน</Col>
          <Col md="2">
            <Select options={listOfHair} value={hair} onChange={(e) => this.handleHair(e)}/>
          </Col>
          <Col md="4">
            <Input onChange={(e) => this.handleUnique(e)} value={unique} className="font-detail"/>
          </Col>
        </Row>
        <Row className="center mt1  ">
          <Col md="2">ลักษณะใบหน้า</Col>
          <Col md="2">
            <Select options={listOfFace} value={face} onChange={(e) => this.handleFace(e)} className="font-detail"/>
          </Col>
          <Col md="4" />
        </Row>
        <Row className="center mt2">
          <Col>
            <Button color="brown" onClick={() => this.nextPage()}>ถัดไป</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SecondStep;
