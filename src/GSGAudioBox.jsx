import React from 'react';

import Source from './GSGSource.jsx';

export default class GSGAudioBox extends React.Component {
  render() {
    let _audioSource = this.props.children.map((sourceItem) => <Source key={sourceItem.index} _item={sourceItem} />);

    return(
      <audio controls>
        {_audioSource}
        {this.props.nosupport}
      </audio>
    );
  }
};
