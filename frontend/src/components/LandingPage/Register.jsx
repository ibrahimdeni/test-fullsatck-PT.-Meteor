import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark fw-semibold" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="w-100 d-flex">
            <Modal.Title className="fs-2 w-50 mx-auto fw-semibold">
              <h2 className="text-center">Register</h2>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 fw-semibold"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 fw-semibold"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3 fw-semibold"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary fw-semibold w-100" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
