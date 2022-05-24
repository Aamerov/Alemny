import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "./NavbarC.css";
const NavbarC = () => {
  return (
    <Navbar bg="light" varain="light" sticky="top" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="logo" id="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link>
            <Link to="/">HOME</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Explore">EXPLORE</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Login">LOGIN</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Signup">SIGN UP</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarC;
