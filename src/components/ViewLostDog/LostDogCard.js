import React, { Component } from "react";
import { Card, CardImg, Modal, ModalBody, ModalHeader } from "reactstrap";
import "../../css/Layout.css";
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

export default LostDogCard;
