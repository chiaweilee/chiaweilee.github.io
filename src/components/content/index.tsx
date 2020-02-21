import React from 'react';

export default class Index extends React.PureComponent<any> {
  public render() {
    return <div className={'am-content'}>{this.props.children}</div>;
  }
}
