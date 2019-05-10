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
  }

  scrollToAbout = () => window.scrollTo(0, this.myAbout.current.offsetTop)

  render() {
  const links = [
    { link: 'https://www.linkedin.com/in/hannah-bulmer-099030154/', image: require('./static/linkedin.png')},
    { link: 'https://github.com/hannah-bulmer', image: require('./static/github.svg')}
  ]
  
    return (
      <div>
        <div className="App">
          <div className="particles background">
          <FrontPage links={links} scrollToAbout={this.scrollToAbout} />
          <div ref={this.myAbout}>
            <AboutMe
              campfire={require('./static/campfire.gif')}
              earth={require('./static/earth.gif')} />
          </div>
          <ParticleComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
