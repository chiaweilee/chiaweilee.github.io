import React, { useState } from 'react';
import { Button, List } from 'antd-mobile';
import IconfontSymbol from 'iconfont-symbol';
import style from './Starter.less';

export interface StarterProps extends React.Props<any> {
  history?: History;
  location?: Location;
  children?: any;
}

const STARTED_SESSION = 'started-session';

const Starter: React.SFC<StarterProps> = ({ children }) => {
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
    <div className={style.starter}>
      <video
        style={{ height: '100%' }}
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm" />
        <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4" />
      </video>
      <List>
        <List.Item extra={extra} multipleLine={true}>
          <div>
            <IconfontSymbol name={'iconReact'} />
          </div>
          {window.screen.width}x{window.screen.height} {window.devicePixelRatio}
          <List.Item.Brief>{navigator.userAgent}</List.Item.Brief>
        </List.Item>
      </List>
    </div>
  ) : (
    children
  );
};

export default Starter;
