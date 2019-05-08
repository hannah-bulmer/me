import React, { Component } from 'react';
import ParticleComponent from "./ParticleComponent";
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div id='root'>
        <div className="App">
          <div className="particles background">
          <div className="title">Hannah Bulmer</div>
          <h4>Aspiring computer scientist • Coffee enthusiast</h4>
          <a href="https://www.linkedin.com/in/hannah-bulmer-099030154/" className="link">
            <img src={require('./static/linkedin.png')} width="20" height="20"/>
          </a>
          <a href="https://github.com/hannah-bulmer" className="link">
            <img src={require('./static/github.svg')} width="20" height="20" />
          </a>
          <ParticleComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
