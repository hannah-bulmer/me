import React from 'react';
import Checkbox from './Checkbox';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {
        drive: true, campfire: true, sail: false, earth: false, wave: false,
      },
    }
  }

  onClick = (e) => {
    const newState = this.state.checked;
    newState[e.target.value] = !newState[e.target.value];
    this.setState({ checked: newState });
  }

  getTotal = () => {
    const {checked} = this.state;
    return Object.keys(checked).filter(val => checked[val]).length;
  }

  renderOrderedList() {
    const enjoy = "math, programming, travelling, being outdoors, filmmaking, playing Wii".split(',');
    return "<ul>" + enjoy.map(item => "<li>" + item + ",</li>").join('') + "</ul>";
  }

  renderAboutMe() {
    const aboutMe = [
      "Hi! My name is Hannah Bulmer and I am an undergraduate student \
      at the University of Waterloo, majoring in <b>computer science</b>. I enjoy "+ this.renderOrderedList(),

      "I first became interested in coding after reading \
      <a href='https://simonsingh.net/books/the-code-book/the-book/' target='_blank'> \
      The Code Book</a> by Simon Singh around the age of 10. I sunk a lot of time into trying to solve \
      the puzzles he left for codebreakers to try their hands at, and through \
      this I discovered the magical world of computer algorithms.",
      
      "From there I became a regular user on ProjectEuler and started taking programming classes in highschool. Since then, I have developed programs in Java, C++, and React. \
      I have also dabbled in 3D animation and UI/UX design.",
    ];
    return aboutMe.map(section => <div><div dangerouslySetInnerHTML={{__html: section}} /><br /></div>)
  }

  render() {
    return (
      <div className="page subpage">
            <div className="leftCol about" style={{"background-color": "white"}}>
            <h1>About me</h1>
              {this.renderAboutMe()}
            </div>
            <div className="rightCol background">
              <h3>Tiny Life BucketList</h3>
              <Checkbox
                caption={"Go camping"}
                value={'campfire'}
                sprite={this.props.sprites['campfire']}
                size={40}
                checked={this.state.checked['campfire']}
                onClick={this.onClick}
              />
              <Checkbox
                caption={"Learn to sail"}
                value={'sail'}
                sprite={this.props.sprites['sail']}
                size={25}
                checked={this.state.checked['sail']}
                onClick={this.onClick}
              />
              <Checkbox
                caption={"Travel the world"}
                value={'earth'}
                sprite={this.props.sprites['earth']}
                size={25}
                checked={this.state.checked['earth']}
                onClick={this.onClick}
              />
              <Checkbox
                caption={"Swim in all the great lakes"}
                value={'wave'}
                sprite={this.props.sprites['wave']}
                size={25}
                checked={this.state.checked['wave']}
                onClick={this.onClick}
              />
              <Checkbox
                caption={"Learn to drive"}
                value={'drive'}
                sprite={this.props.sprites['drive']}
                size={35}
                checked={this.state.checked['drive']}
                onClick={this.onClick}
                className="hideBottom"
              />
              <div style={{"padding-top":"30px"}}>
                Total: {this.getTotal()}
                <span style={{float:"right"}}>List Completed: {this.getTotal()/5 * 100}%</span>
              </div>
            </div>
      </div>
    )
  }
}

export default AboutMe;