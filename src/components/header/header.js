import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = ({ score, currentScore }) => {
  console.log(currentScore);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Songbird</Navbar.Brand>
      <h2 className="header__score">Score: {score}</h2>
      <h3 className="header__score">Cur score: {currentScore}</h3>
    </Navbar>
  );
};

export default Header;
