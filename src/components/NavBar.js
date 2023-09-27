import React from "react";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {OverlayTrigger} from "react-bootstrap";
import {Tooltip} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import smallerLogo from "../assets/favicon.png";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/data";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUSer = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUSer(null);
      removeTokenTimestamp();
    } catch (err) {
  
    }
  };

  const loggedInIcons = (
    <>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Feed</Tooltip>}>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/feed"
        >
          <i className="fas fa-stream"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Love</Tooltip>}>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/loved"
        >
          <i className="fas fa-heart"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Log out</Tooltip>}>
        <NavLink className={styles.NavLink} to="/" onClick={handleLogOut}>
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Profile</Tooltip>}>
        <NavLink
          className={styles.NavLink}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <Avatar src={currentUser?.profile_image} height={40} />
        </NavLink>
      </OverlayTrigger>
      ;
    </>
  );
  const loggedOutIcons = (
    <>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Log in</Tooltip>}>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/login"
        >
          <i className="fas fa-sign-in-alt"></i>
        </NavLink>
      </OverlayTrigger>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container fluid>
        <NavLink to="/">
          <Navbar.Brand>
            <div>
              {currentUser ? (
                <img
                  src={smallerLogo} // Smaller logo for logged in users
                  alt="small-logo"
                  height={40}
                />
              ) : (
                <img
                  src={logo} // Larger logo for logged out users
                  alt="logo"
                  height={40}
                />
              )}
            </div>
          </Navbar.Brand>
        </NavLink>
        {currentUser && (
          <Nav className={`mx-auto ${styles.NavLink}`}>
            <NavLink exact activeClassName={styles.Active} to="/create-pin">
              <i className="far fa-plus-square"></i>Create pin
            </NavLink>
          </Nav>
        )}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Home</Tooltip>}
            >
              <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/"
              >
                <i className="fas fa-home"></i>
              </NavLink>
            </OverlayTrigger>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
