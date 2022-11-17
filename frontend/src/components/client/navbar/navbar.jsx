import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState } from "react";
import bookNav from "../../../assets/images/books2-oke.png";
import SideBar from "./SideBar";

function NavBarClient() {
  return (
    <Navbar className="sticky-top shadow bg-nav" bg="info" expand="lg">
      <Container className="" fluid>
        <Navbar.Collapse className="d-flex w-100" id="navbarScroll">
          <Navbar.Brand
            href="#"
            className="fs-2 fw-semibold shadow bg-light bg-success title__nav border-2 rounded ps-3 pe-4"
          >
            <img className="bookNav" src={bookNav} alt="" />
            The Library
          </Navbar.Brand>
          <div className="ms-auto">
            <SideBar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarClient;
