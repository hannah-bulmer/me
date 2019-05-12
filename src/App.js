import React, { Component } from 'react';
import ParticleComponent from "./ParticleComponent";
import '../node_modules/react-linechart/dist/styles.css';
import './App.scss';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';

class App extends Component {
  constructor (props) {
    super(props);
    this.myAbout = React.createRef();
    this.myProjects = React.createRef();
  }

  scrollToAbout = () => window.scrollTo(0, this.myAbout.current.offsetTop)
  scrollToProjects = () => window.scrollTo(0, this.myProjects.current.offsetTop)

  render() {
  const links = [
    { link: 'https://www.linkedin.com/in/hannah-bulmer-099030154/', image: require('./static/linkedin.png')},
    { link: 'https://github.com/hannah-bulmer', image: require('./static/github.svg')}
  ]

  const sprites = {
    campfire: require('./static/campfire.gif'),
    earth: require('./static/earth.gif'),
    sail: require('./static/sailboat.gif'),
    drive: require('./static/drive.gif'),
    wave: require('./static/wave.gif'),
  };
  
    return (
      <div>
        <div className="App">
          <div className="particles background">
          <FrontPage links={links} scrollToAbout={this.scrollToAbout} scrollToProjects={this.scrollToProjects} />
          <div ref={this.myAbout}>
            <AboutMe sprites={sprites} />
          </div>
          <div ref={this.myProjects} className="page subpage">
            <h1>Projects</h1>
          </div>
          <ParticleComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
