import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/universal.css';

export default function NavigationBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#FFF" }} href="#home">
          <img
            style={{ borderRadius: "50%" }}
            alt=""
            src="https://media.istockphoto.com/vectors/vector-graduation-cap-vector-id1020040550?k=6&m=1020040550&s=170667a&w=0&h=OwpXS3Ca6cLH1FdRhmuLjr9LnuT5ha2GGGypj5kkGME="
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span>F to A Tutoring </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/home"
              >
                <span>Home</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/register-tutor"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                <span>Register as Tutor</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/register-student"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                <span>Register as Student</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/signin"
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                <span>Sign In</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
