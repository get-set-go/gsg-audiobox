import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import AudioBox from '../src';

describe('<AudioBox /> component', function() {

  it('should badge exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<AudioBox />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
