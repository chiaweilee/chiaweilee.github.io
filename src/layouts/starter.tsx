import React, { useState } from 'react';
import { BasicLayoutComponent, BasicLayoutProps } from './index';
import { Button, List } from 'antd-mobile';
import IconfontSymbol from 'iconfont-symbol';
import style from './starter.less';

const STARTED_SESSION = 'started-session';

const Starter: BasicLayoutComponent<BasicLayoutProps> = ({ children }) => {
  const [count, setCount] = useState(9);
  const [started, _setStarted] = useState(sessionStorage.getItem(STARTED_SESSION) !== null);

  setTimeout(() => {
    if (count === 1) {
      setStarted();
      return;
    }
    setCount(count - 1);
  }, 1000);

  const setStarted = () => {
    _setStarted(true);
    sessionStorage.setItem(STARTED_SESSION, '');
  };

  const extra = (
    <Button size="small" inline={true} onClick={setStarted}>
      Start in {count}s
    </Button>
  );

  return !started ? (
    <List style={style.list}>
      <List.Item extra={extra} multipleLine={true}>
        <div>
          <IconfontSymbol name={'iconReact'} />
        </div>
        {window.screen.width}x{window.screen.height} {window.devicePixelRatio}
        <List.Item.Brief>{navigator.userAgent}</List.Item.Brief>
      </List.Item>
    </List>
  ) : (
    children
  );
};

export default Starter;
