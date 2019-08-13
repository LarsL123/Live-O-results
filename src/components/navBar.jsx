import React from "react";
//import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Live O Results</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/select">
              Select competition
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <div className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle "
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false" //fIX   TEH  MOBILE ISSUE???
            >
              About
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a
                className="dropdown-item"
                href="https://github.com/LarsL123/Live-O-results"
              >
                Source Code
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

/* <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}

          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )} */

//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   {/* <Link className="navbar-brand" to="/">
//     Root
//   </Link> */}
//   <div className="navbar-brand"> Live O results</div>

//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggele="collapse"
//     data-target="#navbarNavAltMarkup"
//     aria-controls="navbarNavAltMarkup"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar.toggler-icon" />
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Select Competition
//         </a>
//       </li>
//     </ul>
//     <div className="nav-item">About</div>
//   </div>
// </nav>
