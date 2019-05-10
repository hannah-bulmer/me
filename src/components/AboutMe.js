import React from 'react';
import Checkbox from './Checkbox';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About me</h1>
            <div className="leftCol" style={{"background-color": "white"}}>
              A WIP story about me ♥️
            </div>
            <div className="rightCol background">
              <h3>Tiny Life BucketList</h3>
              <Checkbox caption={"Go camping"} sprite={this.props.campfire} size={40} checked />
              <Checkbox caption={"Travel the world"} sprite={this.props.earth} size={25} />
            </div>
      </div>
    )
  }
}

export default AboutMe;