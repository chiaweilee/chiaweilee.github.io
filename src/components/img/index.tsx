import React from 'react';

export default function({ src }) {
  return (
    <img
      src={process.env.NODE_ENV === 'development' ? `../assets/${src}` : `/home/assets/${src}`}
      alt=""
    />
  );
}
