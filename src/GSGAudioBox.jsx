import React from 'react';

export default class GSGAudioBox extends React.Component {
  render() {
    return(
      <audio controls>
        {this.props.nosupport}
      </audio>
    );
  }
};
