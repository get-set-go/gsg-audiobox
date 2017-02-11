import React from 'react';

import Source from './GSGSource.jsx';

export default class GSGAudioBox extends React.Component {
  render() {
    const _audioSource = this.props.children.map((sourceItem) => <Source key={sourceItem.index} _item={sourceItem} />);

    let _preload = {};
    switch(this.props.preload) {
      case 'auto':
        _preload = 'auto';
      break;

      case 'metadata':
        _preload = 'metadata';
      break;

      default:
        _preload = 'none';
      break;
    }

    let _controls = (this.props.controls) ? true : false;
    let _autoplay = (this.props.autoplay) ? true : false;
    let _loop = (this.props.loop) ? true : false;
    let _muted = (this.props.muted) ? true : false;

    return(
      <audio
        {..._controls ? { controls: 'true' } : {}}
        {..._autoplay ? { autoplay: 'true' } : {}}
        {..._loop ? { loop: 'true' } : {}}
        {..._muted ? { muted: 'true' } : {}}
        {..._preload}>
        {_audioSource}
        {this.props.nosupport}
      </audio>
    );
  }
};

GSGAudioBox.defaultProps = {
  nosupport: 'Your browser does not support the audio element.',
  autoplay: false,
  controls: true,
  loop: false,
  muted: false,
  preload: 'none'
};
