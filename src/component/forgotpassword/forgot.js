
import React from 'react';
import {Modal,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ForgotPass(props) {
   
    const [ModalShowSforgot, setModalShowforgot] = React.useState(false);
    return (
        <>
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

            <h2>forgot Password</h2>
        </div >
        <Modal.Body className="justify-content-center
    align-items-center
    d-flex">
            {/* <div className='mdalbdy'> */}
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  
  
  <div className="justify-content-center
    align-items-center
    d-flex ">
  <Button variant="primary" type="submit">
    Submit
  </Button>
 
  </div>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

     
 
</>
    );
  }
  export default ForgotPass;