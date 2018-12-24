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
  ModalHeader,
  Container, 
  Row, 
  Col
} from "reactstrap";
import "../css/footer.css";
import { Link } from 'react-router-dom'
class Footer extends Component {
  constructor() {
    super();
    this.state = { toggle: false };
  }
  render() {
    return (
      <div className="footer">
          <Container>
              <Row>
              <Col>
              <img src="https://s3-alpha-sig.figma.com/img/ab0c/6381/ccfa28677c41b4f449f0cb4ccfe4e8e9?Expires=1546819200&Signature=cA7VpeyIunj5HIremM5TK31Zw52Fz1h6ZROPZvJFFBXhIRKzY3ZWhF0mYQUmB5BHIMW5swjFY4xE2lQsrULYn7BjSE7OHrZf1W3DbjoacsZlqF~zRgOSWRpx7yt6G02HfBF0ugTxH5~e6sAic~UCCQf49hQlRBmt-Oq0j4iIp-S3sImSzrYJcp03tMGEmwuxz~UQkouIJeeTTZPElkqS1NjDZbNjt5UWNI-uI1~oHmmgzt8mY228x0G8visCwB~rcujM76YQzKH4GN2TXsnCb~XMathdNYPWOAee1W~f6mhlPgu9bxo9Mi5YmSyUl1EG52pJUBpna55T0EmEeR-8Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>

              </Col>
              <Col>
                <Link to="/Business">For Business</Link>
              </Col>
              <Col>
              </Col>
              </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
