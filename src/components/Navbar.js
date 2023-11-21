import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <button
            style={{ marginRight: "1rem", marginLeft: "1rem" }}
            className="btn btn-danger"
            type="submit"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/games">
                <button
                  style={{ marginRight: "1rem", marginLeft: "1rem" }}
                  className="btn btn-success"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faGamepad} /> Games
                </button>
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  style={{margin:"10px", border:"2",outline:"0",background:"transparent",color:"whitesmoke" }}
                  
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    <button
                      style={{ marginRight: "1rem", marginLeft: "1rem" }}
                      className="btn btn-primary"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faUserPlus} /> SignUp
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <button
                      style={{ marginRight: "1rem", marginLeft: "1rem" }}
                      className="btn btn-primary"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
