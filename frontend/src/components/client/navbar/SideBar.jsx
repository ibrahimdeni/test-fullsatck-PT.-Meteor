import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { ImBooks } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BiCategoryAlt } from "react-icons/bi";
import { BsInfoSquareFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
const options = {
  scroll: true,
  backdrop: true,
};

function SideBar({ ...props }) {
  const [showS, setShowS] = useState(false);

  const handleCloseS = () => setShowS(false);
  const toggleShowS = () => setShowS((s) => !s);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <i active onClick={toggleShowS} className="">
        <TiThMenu className="icon-menu ms-auto" />
      </i>
      <Offcanvas
        className="sideBar"
        show={showS}
        onHide={handleCloseS}
        placement="end"
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h2">Hello Name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-sidenaver">
          <ListGroup variant="flush">
            <ListGroup.Item
              action
              as="button"
              className="bg-transparent list-sidebar"
            >
              <h3
                as="button"
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
                className="pt-2"
              >
                {/* <img className="icon-sidenav" src={Profile} alt="" /> */}
                <CgProfile className="me-2" />
                Profile
              </h3>
              <div>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    <Card body style={{ width: "250px" }}>
                      Will be availabe soon!
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="button"
              className="bg-transparent list-sidebar"
            >
              <h3>
                <ImBooks className="me-2" />
                All Books
              </h3>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="button"
              className="bg-transparent list-sidebar"
            >
              <h3
                as="button"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
              >
                <BiCategoryAlt className="me-2" />
                Categories
              </h3>
              <div>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    <Card body style={{ width: "250px" }}>
                      Will be availabe soon!
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="button"
              className="bg-transparent list-sidebar"
            >
              <h3>
                <BsInfoSquareFill className="me-2" />
                About Us
              </h3>
            </ListGroup.Item>
            <ListGroup.Item
              action
              as="button"
              className="bg-transparent list-sidebar"
            >
              <h3 className="text-danger">
                <IoMdLogOut className="me-2" />
                Log Out
              </h3>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
