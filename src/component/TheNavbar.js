import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuoteApi from "../pages/QuoteApi";
import Todo from "../pages/TodoForm";

export default function testScript() {
  return (
    <div>
      <div>
        <Router>
          <Navbar className="Nav" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Chenar's Homework</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  navbar-collapse justify-content-end">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Todo">Todo</Link>
                    </li>
                    <li>
                      <Link to="/QuoteApi">Quote</Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
          <Route path="Todo" element={<Todo />} />
          <Route path="QuoteApi" element={<QuoteApi />} />
            <Route path="/" />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
