import {Modal,Form,Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


function SigInUp(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           signup
          </Modal.Title>
        </Modal.Header> */}
        <div className='mdal' > 

            <h2>signup</h2>
        </div >
        <Modal.Body  className="justify-content-center
    align-items-center
    d-flex ">
            {/* <div className='mdalbdy'> */}
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>last name</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <div className="justify-content-center
    align-items-center
    d-flex ">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to="" className="fp " >forget password ?</Link>
  </div>
</Form>
{/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export default SigInUp;