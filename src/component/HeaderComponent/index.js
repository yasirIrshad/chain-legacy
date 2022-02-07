import React from 'react';
import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDiscord,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';
const HeaderComponent = () => {
    return (



        <Navbar className='bakcolor' expand="lg">
            <Container>
                <Link to="/"><img src={logo} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-center ' id="basic-navbar-nav " >
                    <div className='beforeclas'>
                        <Nav className='Navsec1'  >
                            <Link to="/intro" className='ankrtext text-decoration-none'>Introduction</Link>
                            <Link to="/roadmap" className='ankrtext text-decoration-none'>Roadmap</Link>
                            <Link to="/faq" className='ankrtext text-decoration-none'>FAQ</Link>

                        </Nav>
                        <Nav className='Navsec2'>
                            <div className='d-flex w-100 justify-content-around'> <Nav.Link href="#home" ><div className="icons"> <FontAwesomeIcon icon={faDiscord} /></div></Nav.Link>
                                <Nav.Link href="#link" > <div className="icons"> <FontAwesomeIcon icon={faTwitter} /> </div></Nav.Link>
                            </div>

                            <div className='mintbutt btn btn-outline-primary'>Mint</div>
                        </Nav>

                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>











    )
}

export default HeaderComponent
