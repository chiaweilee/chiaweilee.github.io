import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Dispatch, Store } from 'redux';
import { withRouter } from 'react-router-dom';
import { Flex } from 'antd-mobile';

interface Props extends React.Props<any> {
  store?: Store;
  dispatch?: Dispatch;
  history?: History;
  location?: Location;
}

const style: Object = {
  backgroundColor: '#ebebef',
  color: '#bbb',
  textAlign: 'center',
  height: '30px',
  lineHeight: '30px',
  width: '100%',
};

const PlaceHolder = props => <div style={style}>hello, {JSON.stringify(props.store)}!</div>;

class Index extends PureComponent<Props> {
  render() {
    const { children, store } = this.props;
    return (
      <Flex>
        <Flex.Item>
          <PlaceHolder store={store} />
        </Flex.Item>
      </Flex>
    );
  }
}

export default withRouter(
  connect(({ store }) => ({
    store,
  }))(Index)
);
