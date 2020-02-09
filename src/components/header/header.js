import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = ({ score }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Songbird</Navbar.Brand>
      <h2 className="header__score">Score: {score}</h2>
    </Navbar>
  );
};

export default Header;
