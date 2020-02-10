import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = ({ score, currentScore }) => {
  console.log(currentScore);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="text-danger font-weight-bold">
        Songbird
      </Navbar.Brand>
      <span className="header__score text-light">Score: {score}</span>
    </Navbar>
  );
};

export default Header;
