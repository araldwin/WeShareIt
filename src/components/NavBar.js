import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink className={styles.NavLink} to="/">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height={40} />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/login"
            >
              <i className="fas fa-sign-in-alt"></i>Sign in
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Render the SignUpForm modal */}
    </Navbar>
  );
};

export default NavBar;
