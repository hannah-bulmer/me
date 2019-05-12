import React from 'react';
import Checkbox from './Checkbox';

class AboutMe extends React.Component {
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
      
      "From there I became a regular user on ProjectEuler, and since then, I have developed programs in Java, C++, and React. \
      I dabbled in 3D animation and UI/UX design.",
    ];
    return (
      aboutMe.map(section => <div><div dangerouslySetInnerHTML={{__html: section}} /><br /></div>)
    )
  }
  render() {
    let a = 1;
    for (let i = 0; i < 1000; i ++) {
      a *= 2;
    }
    console.log(a);
    const digits = (""+a).split("");
    console.log(digits);
    return (
      <div className="page subpage">
            <div className="leftCol about" style={{"background-color": "white"}}>
            <h1>About me</h1>
              {this.renderAboutMe()}
            </div>
            <div className="rightCol background">
              <h3>Tiny Life BucketList</h3>
              <Checkbox caption={"Go camping"} sprite={this.props.sprites['campfire']} size={40} checked />
              <Checkbox caption={"Learn to sail"} sprite={this.props.sprites['sail']} size={25} />
              <Checkbox caption={"Travel the world"} sprite={this.props.sprites['earth']} size={25} />
              <Checkbox caption={"Swim in all the great lakes"} sprite={this.props.sprites['wave']} size={25} />
              <Checkbox caption={"Learn to drive"} sprite={this.props.sprites['drive']} size={35} checked className="hideBottom" />
            </div>
      </div>
    )
  }
}

export default AboutMe;