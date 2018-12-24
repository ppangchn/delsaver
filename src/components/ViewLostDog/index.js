import React, { Component } from "react";
import { Container, Row, Col, Input, Button , Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import LostDogList from "./LostDogList";
import "../../css/font.css";
import "../../css/Layout.css";
class ViewLostDog extends Component {
  constructor() {
    super();
    this.state = {
      listOfColor: [],
      listOfSelectedColor: [],
      listOfKind: [],
      address: "คณะเทคโนโลยีสารสนเทศ เขตลาดกระบัง จังหวัดกรุงเทพ",
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
      toggle:true
    };
  }
  handleAddress(e) {
    this.setState({ address: e.target.value });
  }
  goPathAddLostDog() {
    this.props.history.push("/addlostdog");
  }
  random() {
      console.log('random')
    let array = this.shuffle(this.state.listOfKind)
    this.setState({listOfKind:array})
  }
  toggleModal() {
    this.setState({ toggle: !this.state.toggle });
  }
    shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  render() {
    const { listOfKind,toggle ,address} = this.state;
    return (
      <Container className="mt2 preload">
       <Row className="center">
       <Col className="font-title title bold" style={{backgroundColor:"#6E3628",color:'white'}}>รวมสุนัขที่ถูกแจ้งหาย</Col>
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
        <LostDogList />
        <Row className="mt1 center mb2">
          <Button
            size="lg"
            block
            color="brown"
            onClick={() => this.goPathAddLostDog()}
          >
            แจ้งสัตว์เลี้ยงหายที่นี่
          </Button>
        </Row>
      </Container>
    );
  }
}

export default ViewLostDog;
