import React, { Component } from 'react';

class Button extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colour: '#f69ac6',
      essay: '*Insert essay here*',
      essayVisibility: false,
      statement1: 'Click here to read my essay',
      statement2: 'Click here to change the colour'
    }
    this.changeColour = this.changeColour.bind(this);
    this.addEssay = this.addEssay.bind(this);
    this.eventHander = this.eventHandler.bind(this);
  }

  changeColour() {
    this.setState({
      colour: '#'+Math.random().toString(16).substr(-6)
    })
  }

  addEssay() {
    if (!this.state.essayVisibility) this.setState({essayVisibility: true,
    statement: 'Click here to delete my essay'})
    else this.setState({essayVisibility: false,
      statement: 'Click here to read my essay'})
  }

  eventHandler() {
    if (this.props.name == "essay") this.addEssay()
    else this.changeColour()
  }

  render() {
    const essay = this.state.essayVisibility ? this.state.essay : '';
    const statement = this.props.name === "essay" ?
    this.state.statement1 : this.state.statement2;
    return (
      <div>
      <helmet>
      <style>{`:root {
              --button-colour: ${this.state.colour};
            }`}
          </style>
      <button className='button' onClick={() => this.eventHandler()}>
      {statement}</button>
      </helmet>
      <h3>{essay}</h3>
      </div>
    );
  }
}

export default Button;
