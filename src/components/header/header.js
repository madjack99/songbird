import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = ({ score }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="text-danger font-weight-bold">
        Songbird
      </Navbar.Brand>
      <span className="header__score text-light">Score: {score}</span>
    </Navbar>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
