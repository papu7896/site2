import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fst-italic" to="/">
          TourToAssam
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Log in
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signin">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

