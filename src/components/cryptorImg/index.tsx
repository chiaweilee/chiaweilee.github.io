import React, { useState, useEffect } from 'react';
import { decoder, secretKey } from '@/components/cryptor';
import { onTouch } from '@/utils/e';

export default function(props) {
  const [hidden, setHidden] = useState(true);
  const [img, setImg] = useState(undefined);
  const { src } = props;

  // @ts-ignore
  useEffect(async () => {
    if (localStorage.getItem(secretKey)) {
      const res = await (
        await fetch(
          process.env.NODE_ENV === 'development'
            ? `../assets/${src}.json`
            : `/home/assets/${src}.json`,
        )
      ).json();
      if (res) {
        setImg(decoder(res));
      }
    }
  }, [src]);

  if (!img) {
    return null;
  }

  if (!localStorage.getItem(secretKey)) {
    return null;
  }

  if (hidden) {
    return (
      <img
        { ...onTouch({
          longTouchTimeout: 6000,
          onLongPress: () => {
            setHidden(false);
          }
        }) }
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg=="
        alt=""
        style={{ height: '56vw' }}
      />
    );
  }

  return <img src={img} alt="" />;
}
