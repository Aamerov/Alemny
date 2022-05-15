import logo from "../assets/imgs/logo.png";
const Navbar = () => {
  return (
    <div id="nav__wrapper">
      <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <div class="container">
          <a class="navbar-brand" href="./index.html">
            <img src={logo} alt="" class="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="search d-flex position-relative d-lg-flex d-none">
            <input
              class="form-control me-2"
              type="search"
              placeholder="looking for a course?"
              aria-label="Search"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </form>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./pages/explore.html">
                  EXPLORE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./pages/login.html">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn-primary signup"
                  id="signup__btn"
                  href="./pages/register.html"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
