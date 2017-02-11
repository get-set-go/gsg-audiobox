import React from 'react';

export default class GSGSource extends React.Component {
  render() {
    const { _item } = this.props;

    return <source src={_item.props.bUrl} type={_item.props.bType} />;
  }
};
