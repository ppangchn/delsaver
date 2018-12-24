import React,{Component} from 'react'
import {Navbar,Nav,NavLink,NavbarBrand} from 'reactstrap'
import '../css/font.css'
import '../css/Header.css'
class Header extends Component {
    render() {
        return(
            <Navbar className="font-detail">
                <NavbarBrand>delsaver</NavbarBrand>
                <Nav className="ml-auto">
                    
                    <NavLink className="pointer hover-nl" onClick={() => this.goPathLost()}>รวมสุนัขที่ถูกแจ้งหาย</NavLink>
                    <NavLink className="pointer hover-nl" onClick={() => this.goPathFound()}>รวมสุนัขที่ถูกพบเจอ</NavLink>
                    <NavLink className="pointer hover-nl">บริจาค</NavLink>
                    <NavLink className="pointer hover-nl">เกี่ยวกับเรา</NavLink>
                    <NavLink className="pointer hover-nl">a</NavLink>    
                </Nav>
            </Navbar>
        );

    }
}

export default Header;