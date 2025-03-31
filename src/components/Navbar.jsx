import React from 'react';
import { Button } from "react-bootstrap";
import '../assets/css/Navbar.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav navbar-buttons">
          <li className="nav-item">
            <Button className="btn btn-dark">🍕 Home</Button>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Button className="btn btn-dark">🔓 Profile</Button>
              </li>
              <li className="nav-item">
                <Button className="btn btn-dark">🔒 Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Button className="btn btn-dark">🔐 Login</Button>
              </li>
              <li className="nav-item">
                <Button className="btn btn-dark">🔐 Register</Button>
              </li>
            </>
          )}
          <li className="nav-item total-button ml-auto">
            <Button id="Total" className="btn btn-transparent">🛒 Total: ${total.toLocaleString()}</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;