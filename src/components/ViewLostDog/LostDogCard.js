import React, { Component } from "react";
import {
  Card,
  CardImg,
  Modal,
  ModalBody,
  ModalHeader,
  Container,
  CardBody,
  Row,
  Col
} from "reactstrap";
import "../../css/Layout.css";  
import "../../css/font.css";
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
    const { data } = this.props;
    return (
      <Card className="mr2 mb2">
        {" "}
        <CardImg
          className="pointer"
          src={data.pic}
          alt="Lost dog image"
          onClick={() => {
            this.toggleModal();
          }}
        />
        <CardBody className="font-detail"><div style={{fontWeight:'800'}}>รางวัล : {data.reward}</div><div>วันที่พบ : {data.date}</div></CardBody>
        <Modal
          centered
          bolded
          isOpen={toggle}
          toggle={() => this.toggleModal()}
        >
          <ModalHeader toggle={() => this.toggleModal()} className="pd0">
            <div className="center">
              <img
                className="img-full-div"
                src={data.pic}
              />
            </div>{" "}
          </ModalHeader>
          <ModalBody>
            <Container className="font-detail">
              <Row className="center">
                <Col md="2" className="pd0">
                  สุนัขพันธุ์:
                </Col>
                <div className="bold">บูลด็อก</div>
              </Row>
              <Row>
                <Col>สีของสุนัข</Col>
              </Row>
              <Row>
                <Col className="center bold">ดำ</Col>
              </Row>
              <Row>
                <Col>สถานที่หาย</Col>
              </Row>
              <Row>
                <Col className="center bold">ลาดกระบัง</Col>
              </Row>
              <Row>
                <Col>ลักษณะเด่น</Col>
              </Row>
              <Row>
                <Col className="center bold">มีใฝที่หูซ้าย</Col>
              </Row>
              <Row>
                <Col>สุขภาพ</Col>
              </Row>
              <Row>
                <Col className="center bold">ปกติ</Col>
              </Row>
            </Container>
          </ModalBody>
        </Modal>
      </Card>
    );
  }
}

export default LostDogCard;
