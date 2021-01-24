import React from 'react';
import Icon from '@/components/icon';
import styles from './index.less';

export default function (props: any) {
  const { children, __unmount__ } = props;

  return (
    <div className={styles['modal-root']}>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-close']}>
          <Icon type={'iconclose'} onClick={__unmount__} />
        </div>
        {children}
      </div>
    </div>
  );
}
