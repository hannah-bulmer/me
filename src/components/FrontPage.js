import React from 'react';
import WebsiteLink from './WebsiteLink';

class FrontPage extends React.Component {
  renderLinks() {
    return (
      this.props.links.map(link => <WebsiteLink link={link.link} image={link.image} />)
    )
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <button className="App headerTabs" onClick={this.props.scrollToAbout}>About</button>
          <button className="App headerTabs" onClick={this.props.scrollToProjects}>Projects</button>
          <button className="App headerTabs" onClick={this.props.scrollToExperiences}>Experience</button>

        </header>
          <div className="title">Hannah Bulmer</div>
          <h4>Aspiring computer scientist • Coffee enthusiast</h4>
          {this.renderLinks()}
      </div>
    )
  }
}

export default FrontPage;