import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import { API } from "../../config/api";
import { useMutation } from "react-query";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, dispatch] = useContext(UserContext);
  // const [message, setMessage] = useState(null);

  //login
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

  // const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", form);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      }
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Failed!",
      });
      console.log(error);
    }
  });

  return (
    <>
      <Button variant="outline-dark fw-semibold" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-modal" closeButton>
          <div className="w-100 d-flex">
            <Modal.Title className="fs-2 w-50 mx-auto fw-semibold">
              <h2 className="text-center">Login</h2>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
          <Modal.Body className="bg-modal1">
            <Form.Group className="mb-3 fw-semibold">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="rounded-5 form-modal"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
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
                onChange={handleChange}
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
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Login;
