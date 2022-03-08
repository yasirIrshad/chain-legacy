import React from 'react';
import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown, Container,Modal,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDiscord,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Login from '../loginModal/loginmodal';
import SigInUp from '../signup/signup';
import ForgotPass from '../forgotpassword/forgot';



const HeaderComponent = () => {
    const [loginmodalShow, setloginModalShow] = React.useState(false);
    const [ModalShowSforgot, setModalShowforgot] = React.useState(false);
    const [ModalShowSignUp, setModalShowSignUp] = React.useState(false);
    return (

<>

        <Navbar className='bakcolor' expand="lg">
            <Container>
                <Link to="/"><img src={logo} className="navlogo"/></Link>
                <Navbar.Toggle className="navToggleBtn" aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse className='justify-content-center ' id="basic-navbar-nav " >
                    <div className='beforeclas'>
                        <Nav className='Navsec1'  >
                            <Link to="/intro" className='ankrtext text-decoration-none'>Introduction</Link>
                            <Link to="/roadmap" className='ankrtext text-decoration-none'>Roadmap</Link>
                            <Link to="/faq" className='ankrtext text-decoration-none'>FAQ</Link>

                        </Nav>
                        <Nav className='Navsec2'>
                            <div className='d-flex w-100 justify-content-around'> <Nav.Link  ><div className="icons"> <FontAwesomeIcon icon={faDiscord} /></div></Nav.Link>
                                <Nav.Link > <div className="icons"> <FontAwesomeIcon icon={faTwitter} /> </div></Nav.Link>
                            </div>
                            <div className='mintbutt btn btn-outline-primary' onClick={() => setloginModalShow(true)}>Reg</div>
                            <div className='mintbutt btn btn-outline-primary'>Mint</div>
                        </Nav>

                    </div>


                </Navbar.Collapse>
            </Container>
        </Navbar>



        <Login
        show={loginmodalShow}
        onHide={() => setloginModalShow(false)}
      />
     <SigInUp
      show={ModalShowSignUp}
      onHide={() => setModalShowSignUp(false)}
     
     
     />
     <ForgotPass
     show={ModalShowSforgot}
     onHide={() => setModalShowforgot(false)}
    
    />
      
    
</>






    )
}

export default HeaderComponent
