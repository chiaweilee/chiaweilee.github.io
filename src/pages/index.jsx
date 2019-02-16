import React from 'react';
import styles from './index.css';

const test = value => value + 1;

export default function() {
  return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            To get started { 1 | test }, edit <code>src/pages/index.js</code> and save to reload.
          </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
          </li>
        </ul>
      </div>
  );
}
