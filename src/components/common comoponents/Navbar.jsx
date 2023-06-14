import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/images/FAD-logo-ai.png";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavbarOffCanva() {
  return (
    <div className="navbar-main fixed-top">
      {["lg"].map((expand) => (
        <div className="header ">
          <Navbar key={expand} expand={expand} className="p-0 py-1">
            <Container>
              <Navbar.Brand href="#">
                <img className="logo img-fluid" src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton style={{ background: "#fff" }}>
                  <img className="logo img-fluid" src={logo} alt="logo" />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="navigators justify-content-center flex-grow-1 pe-3">
                    <Nav.Link className="navigators-b">
                      <Link to="/">HOME</Link>
                    </Nav.Link>
                    <Nav.Link className="navigators-b">
                    <Link to="/#about-us">
                      ABOUT US
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="navigators-b">
                    <Link to="/#services">
                      SERVICES
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="navigators-b">
                    <Link to="/#faq-section">
                      FAQ’s
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="navigators-b">
                      <Link to="/contact-us">CONTACT US</Link>
                    </Nav.Link>
                  </Nav>
                  <Nav className="header-btn-div">
                    <Link to="/#registration-login">
                      <button className="headd-log-btn header-btn round-btn-a white-btn-a ">
                        Login
                      </button>
                    </Link>{" "}
                    <Link to="/#registration-signup">
                      <button className="headd-sign-btn header-btn round-btn-a green-btn-a ">
                        Sign Up
                      </button>
                    </Link>{" "}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      ))}
    </div>
  );
}
