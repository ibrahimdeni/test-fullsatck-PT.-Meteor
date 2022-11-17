import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import bookNav from "../../assets/images/books2-oke.png";

function NavbarLandingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className="sticky-top shadow bg-nav" bg="info" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand
          href="#"
          className="fs-2 fw-semibold shadow bg-light title__nav border-2 rounded ps-3 pe-4"
        >
          <img className="bookNav" src={bookNav} alt="" />
          The Library
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link className="fw-semibold ms-4" href="#action1">
              Home
            </Nav.Link> */}
            <NavDropdown
              className="ms-4 fw-semibold"
              title="Click me!"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="fw-semibold" href="#action3">
                Go to All Books
              </NavDropdown.Item>
              <NavDropdown.Item className="fw-semibold" href="#action4">
                Go to Categories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="fw-semibold" href="#action5">
                About The Library
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex">
            <div className="me-2">
              <Register />
            </div>
            <div>
              <Login />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLandingPage;
