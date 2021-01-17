import React, { useState, useEffect } from 'react';
import Map from './Map';
import Icon from '@/components/icon';
import Modal from '@/components/modal';
import { onTouch } from '@/utils/e';
import useModal from '@/utils/useModal';
import styles from './index.less';

const apiKey =
  process.env.NODE_ENV === 'development'
    ? 'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD'
    : 'AvHBgtLyf4zbDhXESAuvFMSqIg1GgomX6DnDgw-CaXFeRmWVzvXPC55WveE4pJla';

const MapComponent = (props: any) => {
  const [modal, setModal] = useState(undefined);
  const [mask, setMask] = useState(true);
  // @ts-ignore
  const [latitude, longitude] = typeof props.center === 'string' ? props.center.split(',') : [];
  const points = Array.isArray(props.points)
    ? props.points.map((point: any) => {
        // tslint:disable-next-line:no-shadowed-variable
        const [latitude, longitude] = point.split(',');
        return { latitude, longitude };
      })
    : [];
  const center =
    latitude && longitude
      ? { latitude, longitude }
      : // try using points as center
        points[0] && { latitude: points[0].latitude, longitude: points[0].longitude };
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

  useEffect(() => {
    return () => {
      if (typeof modal === 'function') {
        modal();
      }
    };
  }, []);

  const fullscreen = props.fullscreen;
  const fullscreenCls = fullscreen ? styles['map-fullscreen'] : '';

  return (
    <div className={fullscreenCls} style={{ position: 'relative' }}>
      {!fullscreen && mask && (
        <div
          className={styles['map-mask']}
          {...onTouch({
            onLongPress: () => {
              setMask(false);
            },
            onDblClick: () => {
              setModal(useModal(
                <Modal>
                  <MapComponent fullscreen={true} {...props} />
                </Modal>,
              ));
            },
          })}
        >
          <Icon type={'iconunlock'} />
        </div>
      )}
      <Map
        className={[styles.map, fullscreenCls].join(' ')}
        apiKey={apiKey}
        center={center}
        points={points}
        walking={walking}
        driving={driving}
        zoom={props.zoom}
        aerial={props.aerial}
      />
    </div>
  );
};

export default MapComponent;
