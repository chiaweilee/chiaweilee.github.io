import React, { useState } from 'react';
import { decoder, secretKey } from '@/components/cryptor';

export default function(props) {
  const [hidden, setHidden] = useState(true);
  const { src } = props;
  if (!src) {
    return null;
  }

  if (!localStorage.getItem(secretKey)) {
    return null;
  }

  if (hidden) {
    return (
      <img
        onClick={() => {
          setHidden(false);
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg=="
        alt=""
      />
    );
  }

  return <img src={decoder(src, true)} alt="" />;
}
