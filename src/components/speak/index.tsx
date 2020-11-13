import React from 'react';
// @ts-ignore
import { SayButton } from 'react-say';
import styles from './index.less';

export default (props: any) => {
  return (
    <span className={styles.clear}>
      <SayButton {...{ ...props, text: props.children }} />
    </span>
  );
};
