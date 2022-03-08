
import React from 'react';
import {Modal,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SigInUp from '../signup/signup';

function Login(props) {
    const [loginmodalShow, setloginModalShow] = React.useState(false);
    const [ModalShowSignUp, setModalShowSignUp] = React.useState(false);
    const [ModalShowSforgot, setModalShowforgot] = React.useState(false);
    return (
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='marg'
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           signup
          </Modal.Title>
        </Modal.Header> */}
        <div className='mdal' > 

            <h2>Login</h2>
        </div >
        <Modal.Body className="justify-content-center
    align-items-center
    d-flex">
            {/* <div className='mdalbdy'> */}
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <div className="justify-content-center
    align-items-center
    d-flex ">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <span onClick={props.hide}>
  <Link to="" className="fp " onClick={()=>setModalShowforgot(true)}>f password ?</Link>
  </span>
 
  </div>
  <div>
  <span className='w-100 d-flex justify-content-center align-center mt-5' onClick={props.hide}>
  <Link to="" className="fp " onClick={()=>console.log(setModalShowSignUp(true))}>SignUp</Link>
  </span>
  </div>
</Form>
{/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

     
    
 
</>
    );
  }
  export default Login;