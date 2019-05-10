import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  componentDidMount() {
    this.setState({ checked: this.props.checked })
  }

  onClick = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div style={{"padding-bottom": "10px"}}>
        <input type="checkbox" checked={this.state.checked} onClick={this.onClick} />
        <span>{this.props.caption}</span><img className="sprite" src={this.props.sprite} height={this.props.size} width={this.props.size} />
      </div>
    );
  }
}

export default Checkbox;