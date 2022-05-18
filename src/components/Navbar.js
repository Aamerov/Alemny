import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
const Navbar = () => {
  return (
    <div id="nav__wrapper">
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="search d-flex position-relative d-lg-flex d-none">
            <input
              className="form-control me-2"
              type="search"
              placeholder="looking for a course?"
              aria-label="Search"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  EXPLORE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn-primary signup"
                  id="signup__btn"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
