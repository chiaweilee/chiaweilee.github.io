import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Dispatch, Store } from 'redux'
import { withRouter } from 'react-router-dom';

interface Props extends React.Props<any> {
  store?: Store;
  dispatch?: Dispatch;
  history?: History;
  location?: Location;
}

class Index extends PureComponent<Props> {
  render() {
    const { children, store } = this.props;
    return <div>hello, {JSON.stringify(store)}!</div>;
  }
}

export default withRouter(
  connect(({ store }) => ({
    store,
  }))(Index)
);
