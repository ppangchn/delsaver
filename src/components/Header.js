import React, { Component } from "react";
import { Navbar, Nav, NavLink, NavbarBrand ,Collapse} from "reactstrap";
import { withRouter } from "react-router-dom";
import "../css/font.css";
import "../css/Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      viewLostDogBold: "",
      viewFoundDogBold: "",
      donationBold: "",
      aboutBold: "",
      collapsed:false
    };
  }
  handleCollapse() {
      this.setState({collapsed : !this.state.collapsed})
  }
  goPathHome() {
    this.clear();
    this.props.history.push("/");
  }
  goPathViewLostDog() {
    this.clear();
    this.setState({ viewLostDogBold: "bold" });
    this.props.history.push("/viewlostdog");
  }
  goPathViewFoundDog() {
    this.clear();
    this.setState({ viewFoundDogBold: "bold" });
    this.props.history.push("/viewfounddog");
  }
  goPathDonation() {
    this.clear();
    this.setState({ donationBold: "bold" });
    this.props.history.push("/donation");
  }
  goPathAbout() {
    this.clear();
    this.setState({ aboutBold: "bold" });
    this.props.history.push("/about");
  }
  checkPath() {
    const { pathname } = this.props.location;
    console.log(this.props);
    if (pathname === "/viewlostdog") this.setState({ viewLostDogBold: "bold" });
    if (pathname === "/viewfounddog")
      this.setState({ viewFoundDogBold: "bold" });
    if (pathname === "/donation") this.setState({ donationBold: "bold" });
    if (pathname === "/about") this.setState({ aboutBold: "bold" });
  }
  clear() {
    this.setState({
      viewLostDogBold: "",
      viewFoundDogBold: "",
      donationBold: "",
      aboutBold: ""
    });
  }
  componentDidMount() {
    this.checkPath();
  }
  render() {
    const {
      viewLostDogBold,
      viewFoundDogBold,
      donationBold,
      aboutBold
    } = this.state;
    return (
      <Navbar className="font-title fixed"  expand="md">
        <NavbarBrand className="pointer" onClick={() => this.goPathHome()}>
          <img src="https://s3-alpha-sig.figma.com/img/ab0c/6381/ccfa28677c41b4f449f0cb4ccfe4e8e9?Expires=1546819200&Signature=cA7VpeyIunj5HIremM5TK31Zw52Fz1h6ZROPZvJFFBXhIRKzY3ZWhF0mYQUmB5BHIMW5swjFY4xE2lQsrULYn7BjSE7OHrZf1W3DbjoacsZlqF~zRgOSWRpx7yt6G02HfBF0ugTxH5~e6sAic~UCCQf49hQlRBmt-Oq0j4iIp-S3sImSzrYJcp03tMGEmwuxz~UQkouIJeeTTZPElkqS1NjDZbNjt5UWNI-uI1~oHmmgzt8mY228x0G8visCwB~rcujM76YQzKH4GN2TXsnCb~XMathdNYPWOAee1W~f6mhlPgu9bxo9Mi5YmSyUl1EG52pJUBpna55T0EmEeR-8Ww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        </NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav className="ml-auto" navbar>
          <NavLink
            className={`pointer hover-nl ${viewLostDogBold}`}
            onClick={() => this.goPathViewLostDog()}
          >
            รวมสุนัขที่ถูกแจ้งหาย
          </NavLink>
          <NavLink
            className={`pointer hover-nl ${viewFoundDogBold}`}
            onClick={() => this.goPathViewFoundDog()}
          >
            รวมสุนัขที่ถูกพบเจอ
          </NavLink>
          <NavLink
            className={`pointer hover-nl ${donationBold}`}
            onClick={() => this.goPathDonation()}
          >
            บริจาค
          </NavLink>
          <NavLink
            className={`pointer hover-nl ${aboutBold}`}
            onClick={() => this.goPathAbout()}
          >
            เกี่ยวกับเรา
          </NavLink>
        </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
