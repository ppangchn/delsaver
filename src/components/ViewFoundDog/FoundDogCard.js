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
class FoundDogCard extends Component {
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
        <CardBody className="font-detail">{data.date}</CardBody>
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
                src="https://s3-alpha-sig.figma.com/img/785b/62df/87314e006df254c64cebd4ad331d6cf9?Expires=1546819200&Signature=WCKaPTiah-VJhd~Yy0RTd0Jd9W~2bcS5kl2y7pOTLg3X0rdJse-vhOy3rBUnemixHg1LaH7VDDBpkaJL4Ikhr82dc5vclw4cDZg3ZkHQDvTlauiNIPk~wFY-2rqwep6TAo8LR4YVAmpZVd5RGxbQGOW3BoscVC8285TwnqVlnZYUQiWbarh8FoYCqRu-EFML6DytesUkjbdN2xozJ0ni4F183aMUasHCX~JI22R7LpnB6RgIEwvgleDq8UnNm7M7VPzzlxybFBMXo9xzPEEEH6SzoGDwSceRDgi6Fb3dJJkEWMnq4ryD3EeJ4O6S8uZk7YtN0~ESYgvIp-JWEWgoCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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

export default FoundDogCard;
