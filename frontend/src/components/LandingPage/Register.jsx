import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { API } from "../../config/api";
import { useMutation } from "react-query";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //register
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(register);

  console.log("register :", register);

  const handleChangeRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  const handleSubmitRegister = useMutation(async (e) => {
    try {
      e.preventDefault();

      await API.post("/register", register);

      Swal.fire({
        icon: "success",
        title: "Registration Success!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registration Failed!",
      });
      console.log(error);
    }
  });

  return (
    <>
      <Button variant="outline-dark fw-semibold" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-modal" closeButton>
          <div className="w-100 d-flex">
            <Modal.Title className="fs-2 w-50 mx-auto fw-semibold">
              <h2 className="text-center">Register</h2>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Form onSubmit={(e) => handleSubmitRegister.mutate(e)}>
          <Modal.Body className="bg-modal1">
            <Form.Group className="mb-3 fw-semibold">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="rounded-5 form-modal"
                type="text"
                id="name"
                name="name"
                onChange={handleChangeRegister}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="rounded-5 form-modal"
                type="email"
                id="email"
                name="email"
                onChange={handleChangeRegister}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-5 form-modal"
                type="password"
                id="password"
                name="password"
                onChange={handleChangeRegister}
                placeholder=""
                autoFocus
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-modal">
            <Button
              variant="outline-info fw-semibold w-100 rounded-5"
              onClick={handleClose}
              type="submit"
            >
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Register;
