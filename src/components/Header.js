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
      <Navbar className="font-detail"  expand="md">
        <NavbarBrand className="pointer" onClick={() => this.goPathHome()}>
          delsaver
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
          <NavLink className={`pointer hover-nl`}>a</NavLink>
        </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
