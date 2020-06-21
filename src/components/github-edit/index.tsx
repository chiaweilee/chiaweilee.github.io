import React from 'react';
import Icon from '@/components/icon';
import styles from './index.less';

interface Props {
  href?: string;
}

export default (props: Props) => (
  <div className={styles['github-edit-wrapper']}>
    <a href={props.href} rel="noreferrer">
      <Icon type="icongithub" />
    </a>
  </div>
);
