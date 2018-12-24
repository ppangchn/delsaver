import React, { Component } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import FoundDogList from "./FoundDogList";
import "../../css/font.css";
import "../../css/Layout.css";
import '../../css/AddLostDog.css'
class ViewFoundDog extends Component {
  constructor() {
    super();
    this.state = {
      listOfColor: [],
      listOfSelectedColor: [],
      listOfKind: [
        { value: "ชิวาวา", label: "ชิวาวา" },
        { value: "พุดเดิ้ล", label: "พุดเดิ้ล" },
        { value: "พุดเดิ้ล", label: "พุดเดิ้ล" },
        { value: "โกลเด้นรีทรีฟเวอร์", label: "โกลเด้นรีทรีฟเวอร์" },
        { value: "ปอมเมอเรเนี่ยน", label: "ปอมเมอเรเนี่ยน" },
        { value: "ไซบีเรียน ฮัสกี้", label: "ไซบีเรียน ฮัสกี้" },
        { value: "ปั๊ก", label: "ปั๊ก" },
        { value: "ชิสุ", label: "ชิสุ" }
      ],
      kind: "",
      address: "คณะเทคโนโลยีสารสนเทศ เขตลาดกระบัง จังหวัดกรุงเทพ",
      toggle:true
    };
  }
  toggleModal() {
    this.setState({ toggle: !this.state.toggle });
  }
  handleAddress(e) {
    this.setState({ address: e.target.value });
  }
  goPathAddFoundDog() {
    this.props.history.push("/addfounddog");
  }
  render() {
    const { listOfKind,toggle ,address} = this.state;
    return (
      <Container className="mt2 preload">
        <Row className="center">
          <Col className="font-title title bold" style={{backgroundColor:"#D99502",color:'white'}}>รวมสุนัขที่ถูกพบเจอ</Col>
        </Row>
        <Row className="mt2 center">
          <Col md="1" className="font-detail bold">
            สีของสุนัข
          </Col>
          <div className="sq-box mr-sq-box c1" />
          <div className="sq-box mr-sq-box c2" />
          <div className="sq-box mr-sq-box c3" />
          <div className="sq-box mr-sq-box c4" />
          <div className="sq-box mr-sq-box c5" />
          <div className="sq-box mr-sq-box c6" />
          <div className="sq-box mr-sq-box c7" />
          <Col md="2" className="font-detail bold">
            พันธุ์ของสุนัข
          </Col>
          <Col sm="2" md="2">
            <Select options={listOfKind} />
          </Col>
          <Col md="2" className="font-detail bold">
            สถานที่ที่พบสุนัขล่าสุด
          </Col>
          <Col sm="2" md="2">
            <Input onChange={e => this.handleAddress(e)} value={address}/>
          </Col>
          {/* <div className="font-detail">เรียงตามสถานที่และเวลาล่าสุด</div> */}
        </Row>
        <FoundDogList />
        <Row className="mt1 center mb2">
          <Button
            size="lg"
            block
            color="yellow"
            onClick={() => this.goPathAddFoundDog()}
          >
            แจ้งพบเจอสัตว์ที่นี่
          </Button>
        </Row>
      </Container>
    );
  }
}

export default ViewFoundDog;
