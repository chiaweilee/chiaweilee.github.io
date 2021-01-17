import React, { useState, useEffect } from 'react';
import Icon from '@/components/icon';
import styles from './index.less';

export default function (props: any) {
  const { children, __unmount__ } = props;
  const [orientation, setOrientation] = useState(window.orientation);

  function updateOrientation() {
    setOrientation(window.orientation);
  }

  useEffect(() => {
    window.addEventListener('resize', updateOrientation);
    return () => {
      window.removeEventListener('resize', updateOrientation);
    };
  }, []);

  function getStyle() {
    if (orientation === 90 || orientation === 270) {
      return {
        transform: `rotate(${orientation}deg)`,
        width: document.body.clientHeight,
        height: document.body.clientWidth,
        top: (document.body.clientHeight - document.body.clientWidth) / 2,
        left: -((document.body.clientHeight - document.body.clientWidth) / 2),
      };
    }
    return {};
  }

  return (
    <div className={styles['modal-root']}>
      <div className={styles['modal-wrapper']} style={getStyle()}>
        <div className={styles['modal-close']}>
          <Icon type={'iconclose'} onClick={__unmount__} />
        </div>
        {children}
      </div>
    </div>
  );
}
