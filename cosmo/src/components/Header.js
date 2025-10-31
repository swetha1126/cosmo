import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MakeupSite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="productsDropdown" role="button" data-bs-toggle="dropdown">
                  Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                  <li><Link className="dropdown-item" to="/Lipstick">Lipstick</Link></li>
                  <li><Link className="dropdown-item" to="/Foundation">Face Makeup</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
                  About
                </Link>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li className="dropdown-item-text">
                    We bring you the best <br /> in beauty!
                  </li>
                  <li><Link className="dropdown-item" to="/Logout">Logout</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="contactDropdown" role="button" data-bs-toggle="dropdown">
                  Contact
                </Link>
                <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                  <li><div className="dropdown-item">Email</div></li>
                  <li><div className="dropdown-item">Social Media</div></li>
                  <li><div className="dropdown-item">Location</div></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Cart">Cart</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
