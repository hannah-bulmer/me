import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Header from './Header.js';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    configureAnchors({offset: -10, scrollDuration: 200})
  }

  render() {
    return (
      <div id='root'>
      <div className="App">
      <Header />
        <h1>HELLO</h1>
        <h2>This is my website</h2>
        <Button name="colour"/>
        <Button name="essay"/>
        </div>
        <p id="space"></p>
      <ScrollableAnchor id="about">
      <h3 id="App-about">Hello this is a WIP. This is my About me page!
      </h3>
      </ScrollableAnchor>
      <p id="space"></p>
      </div>
    );
  }
}

export default App;
