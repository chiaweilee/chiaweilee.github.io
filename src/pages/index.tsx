import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Dispatch, Store } from 'redux';
import { withRouter } from 'react-router-dom';
import { Flex } from 'antd-mobile';
import { forceUpdate, setCookie } from 'saga-cookie';

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
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(
        setCookie({
          a: Math.random(),
        })
      );
      setTimeout(() => {
        this.props.dispatch(
          setCookie({
            a: null,
          })
        );
      }, 1000);
    }, 3000);
  }

  render() {
    const { dispatch, store, cookie } = this.props;
    return (
      <Flex>
        <Flex.Item>
          <PlaceHolder store={store} />
          <div>{JSON.stringify(cookie)}</div>
        </Flex.Item>
      </Flex>
    );
  }
}

export default withRouter(
  connect(({ store, cookie }) => ({
    store,
    cookie,
  }))(Index)
);
