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
    const {data} = this.props;
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
        <Modal centered bolded isOpen={toggle} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()} className="pd0"><div className="center"><img className="img-full-div" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/></div> </ModalHeader>
          <ModalBody>
         
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

export default FoundDogCard;
