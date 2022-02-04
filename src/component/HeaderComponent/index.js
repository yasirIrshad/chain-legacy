import React from 'react';
import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDiscord,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

import '../../App.css';
const HeaderComponent = () => {
    return (



        <Navbar className='bakcolor' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-center ' id="basic-navbar-nav " >
                    <div className='beforeclas'>
                        <Nav className='Navsec1'  >
                            <Nav.Link href="#home" className='ankrtext'>Introduction</Nav.Link>
                            <Nav.Link href="#link" className='ankrtext'>Roadmap</Nav.Link>
                            <Nav.Link href="#link" className='ankrtext'>FAQ</Nav.Link>

                        </Nav>
                        <Nav className='Navsec2'  >
                            <Nav.Link href="#home" ><div className="icons"> <FontAwesomeIcon icon={faDiscord} /></div></Nav.Link>
                            <Nav.Link href="#link" > <div className="icons"> <FontAwesomeIcon icon={faTwitter} /> </div></Nav.Link>
                            <Button className='mintbutt' variant="primary">Mint</Button>
                        </Nav>

                    </div>

                    {/* <Nav >
                        

                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar >











    )
}

export default HeaderComponent
