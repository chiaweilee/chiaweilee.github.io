import React from 'react';
import Map, { LatLng } from './Map';
import styles from './index.less';

interface MapProps {
  center: LatLng;
}

const apiKey =
  process.env.NODE_ENV === 'development'
    ? 'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD'
    : 'AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-';

export default (props: MapProps) => <Map className={styles.map} apiKey={apiKey} {...props} />;
