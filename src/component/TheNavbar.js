import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function testScript() {
  return (
    <div>
      <div>
        <Navbar className="Nav" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Chenar's Homework</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  navbar-collapse justify-content-end">
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TodoMain"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Todo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/QuoteApi"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/DogApi"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      DogAPi
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
