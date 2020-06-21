import React from 'react';
import Map from './Map';
import styles from './index.less';

const apiKey =
  process.env.NODE_ENV === 'development'
    ? 'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD'
    : 'AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla';

export default (props: any) => {
  // @ts-ignore
  const [latitude, longitude] = typeof props.center === 'string' ? props.center.split(',') : [];
  const points = Array.isArray(props.points)
    ? props.points.map((point: any) => {
        // tslint:disable-next-line:no-shadowed-variable
        const [latitude, longitude] = point.split(',');
        return { latitude, longitude };
      })
    : [];
  const walking = Array.isArray(props.walking)
    ? props.walking.map((point: any) => {
        // tslint:disable-next-line:no-shadowed-variable
        const [latitude, longitude, address] = point.split(',');
        return { latitude, longitude, address };
      })
    : [];
  const driving = Array.isArray(props.driving)
    ? props.driving.map((point: any) => {
        // tslint:disable-next-line:no-shadowed-variable
        const [latitude, longitude, address] = point.split(',');
        return { latitude, longitude, address };
      })
    : [];

  return (
    <Map
      className={styles.map}
      apiKey={apiKey}
      center={{ latitude, longitude }}
      points={points}
      walking={walking}
      driving={driving}
      zoom={props.zoom}
      aerial={props.aerial}
    />
  );
};
