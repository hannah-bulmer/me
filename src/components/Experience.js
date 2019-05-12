import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class DataDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>Experience</h1>
        <ProgressBar now={60} style={{width: '100px'}}/>
      </div>)
  }
}

export default DataDisplay;