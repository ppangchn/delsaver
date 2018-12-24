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
  render() {
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
      </Card>
    );
  }
}

export default Blog;
