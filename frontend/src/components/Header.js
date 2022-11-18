import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="mb-4">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>E- mart</Navbar.Brand>
            </LinkContainer>

            <Nav className="me-auto">
              <Link to="/mobile" className="nav-link">
                Mobile
              </Link>
              <Link to="/laptop" className="nav-link">
                Laptop
              </Link>
              <Link to="/accessories" className="nav-link">
                Accessories
              </Link>
            </Nav>
            <Nav className="">
              <i className="fa fa-shopping-cart" aria-hidden="true">
                cart
              </i>
              <Link to="/mycart" className="nav-link">
                cart
                <sup> {"4"}</sup>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
