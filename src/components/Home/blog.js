import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import "../../css/home.css";
class Blog extends Component {
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
          src="https://via.placeholder.com/300x225"
          alt="Lost dog image"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button
            onClick={() => {
              this.toggleModal();
            }}
          >
            Button
          </Button>
        </CardBody>
        <Modal centered isOpen={toggle} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()} />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </Card>
    );
  }
}

export default Blog;
