import React from 'react';
import Map from './Map';
import styles from './index.less';

const apiKey =
  process.env.NODE_ENV === 'development'
    ? 'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD'
    : 'AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla';

export default (props: any) => {
  const [latitude, longitude] = typeof props.center === 'string' ? props.center.split(',') : [];
  return <Map className={styles.map} apiKey={apiKey} center={{ latitude, longitude }} />;
};
