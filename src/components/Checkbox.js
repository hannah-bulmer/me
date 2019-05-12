import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <div style={{"padding-bottom": "10px"}}>
        <input type="checkbox" value={this.props.value} checked={this.props.checked} onClick={this.props.onClick} />
        <span>{this.props.caption}</span><img className={"sprite "+this.props.className} src={this.props.sprite} height={this.props.size} width={this.props.size} />
      </div>
    );
  }
}

export default Checkbox;