import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { IconButton, Avatar } from "@material-ui/core";
import { Dropdown } from "bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">CIRCULARS</Navbar.Brand>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/departments">Departments</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <NavDropdown
            title={
              <IconButton color="primary">
                <Avatar>H</Avatar>
              </IconButton>
            }
            alignRight
            id="basic-nav-dropdown"
            flip
          >
            <NavDropdown.Item href="#action/3.1">
              <ExitToAppIcon />
              Signout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
