import React from 'react';

interface ContentProps {
  children?: any;
}

export default class Index extends React.PureComponent<ContentProps> {
  render() {
    return <div className={'am-content'}>{this.props.children}</div>;
  }
}
