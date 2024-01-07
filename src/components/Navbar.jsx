import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <div className="container-fluid">
            <a className="navbar-brand ml-4" href="#">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg"
                alt="Logo"
                width="60"
                height="60"
              />
              Travel.
            </a>
          </div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 pe-2 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              </ul>
       
              <button className="button " type="submit">
                BOOK NOW
              </button>
              
             
          </div>
        </div>
      </nav>

    </div>



  );
}

export default Navbar;
