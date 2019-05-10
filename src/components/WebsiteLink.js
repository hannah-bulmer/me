import React from 'react';

class WebsiteLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link} target="_blank" className="link">
        <img src={this.props.image} width="20" height="20"/>
      </a>
    )
  }
}

export default WebsiteLink;
