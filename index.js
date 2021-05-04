import React from 'react'
import{Nav,NavLink,Bars,NavMenu} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Crop</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/pred" activeStyle>
                        Prediction
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
