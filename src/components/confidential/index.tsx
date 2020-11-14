import React from 'react';
import { Skeleton } from 'antd';
import styles from './index.less';

export default function() {
  return (
    <Skeleton
      className={styles.confidential}
      loading
      paragraph={{ rows: 1, width: '100%' }}
      title={{ width: '80%' }}
    />
  );
}
