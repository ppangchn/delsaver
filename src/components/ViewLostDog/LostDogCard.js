import React, { Component } from "react";
import {
  Card,
  CardImg,
  Modal,
  ModalBody,
  ModalHeader,
  Container,
  Row,
  Col
} from "reactstrap";
import "../../css/Layout.css";
import '../../css/font.css'
class LostDogCard extends Component {
  constructor() {
    super();
    this.state = { toggle: false };
  }
  toggleModal() {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    const { toggle } = this.state;
    return (
      <Card className="mr2 mb2">
        {" "}
        <CardImg
          className="pointer"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Lost dog image"
          onClick={() => {
            this.toggleModal();
          }}
        />
        <Modal centered bolded isOpen={toggle} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()} />
          <ModalBody>
         <div className="center"><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/></div> 
            <Container className="font-detail">
                
              <Row className="center">
                <Col md="2" className="pd0">สุนัขพันธุ์:</Col>
                <div className="bold">ชิว่ว่า</div>
              </Row>
              <Row>
                <Col>สีของสุนัข</Col>
              </Row>
              <Row>
                <Col className="center bold">asa</Col>
              </Row>
              <Row>
                <Col>สถานที่หาย</Col>
              </Row>
              <Row>
                <Col className="center bold">หกดหกด</Col>
              </Row>
              <Row>
                <Col>ลักษณะเด่น</Col>
              </Row>
              <Row>
                <Col className="center bold">ฟหกฟหก</Col>
              </Row>
              <Row>
                <Col>สุขภาพ</Col>
              </Row>
              <Row>
                <Col className="center bold">ฟกฟหก</Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </Card>
    );
  }
}

export default LostDogCard;
