import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "assets/img/logo.png";

const Navigationbar = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container>
      <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     GEMPUR COVID-19
    </Navbar.Brand>
        {/* <Link to="/" className="navbar-brand">
          <b>GEMPUR</b>
        </Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
            <NavDropdown title="Data Covid19" id="nav-dropdown">
              <NavDropdown.Item eventKey="tanahmerah"><Link to="/data/tanahmerah" className="nav-link">Kecamatan Tanah Merah</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="inhil"><Link to="/data/inhil" className="nav-link">Kabupaten INHIL</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="riau"><Link to="/data/riau" className="nav-link">Provinsi Riau</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="indonesia"><Link to="/data/indonesia" className="nav-link">Indonesia</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="dunia"><Link to="/data/dunia" className="nav-link">Dunia</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/about" className="nav-link">
              Tentang
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default memo(Navigationbar);
