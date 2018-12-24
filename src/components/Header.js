import React,{Component} from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'
class Header extends Component {
    render() {
        return(
            <Navbar>
                <Nav>
                    <NavLink>รวมสุนัขที่ถูกแจ้งหาย</NavLink>
                    <NavLink>รวมสุนัขที่ถูกพบเจอ</NavLink>
                    <NavLink>บริจาค</NavLink>
                    <NavLink>เกี่ยวกับเรา</NavLink>
                    <NavLink>a</NavLink>    
                </Nav>
            </Navbar>
        );

    }
}

export default Header;