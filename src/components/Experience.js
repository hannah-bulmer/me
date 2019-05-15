import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class DataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 60,
    }
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(), 1000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }


  tick = () => {
    this.setState({ progress: this.state.progress == 100 ? 0 : this.state.progress + 1})
  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <div className="rightCol background">
          <ProgressBar
            striped
            now={this.state.progress}
            style={{width: '300px'}}
            label="Coming soon"
          />
        </div>
      </div>)
  }
}

export default DataDisplay;