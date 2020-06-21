import React, { useState } from 'react';
import { Drawer } from 'antd-mobile';
import styles from './index.less';

export default (props: any) => {
  const [visible, setVisible] = useState(false);
  const triggerVisible = () => {
    setVisible(!visible);
  };
  const sidebar = typeof props.sidebar === 'function' ? props.sidebar(triggerVisible) : null;
  return (
    <div>
      {visible && (
        <Drawer className={styles.drawer} sidebar={sidebar} open={true}>
          {''}
        </Drawer>
      )}
      {React.createElement('div', { onClick: triggerVisible, children: props.children })}
    </div>
  );
};
