import React, { PureComponent } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

class BasicLayout extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'syncTimeDiff/fetch' });
  }

  render() {
    const { children, syncTimeDiff } = this.props;
    return <div>{children}{JSON.stringify(syncTimeDiff)}</div>;
  }
}

export default withRouter(
  connect(({ syncTimeDiff }) => ({
    syncTimeDiff,
  }))(BasicLayout)
);
