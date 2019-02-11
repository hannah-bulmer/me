import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Button from './Button.js';
import App from './App.js';

class Header extends Component {
  render() {
    return (
      <div class="header">
          <a href="/" class="logo">WIP by hannah</a>
          <div class="header-right">
            <a>Home</a>
            <a href="#about">About</a>
          </div>
      </div>
    )
  }
}

export default Header;
