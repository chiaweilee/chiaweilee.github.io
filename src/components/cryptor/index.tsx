import React from 'react';
const Cryptorjs = require('cryptorjs');

export default function(props) {
  return new Cryptorjs(window.secretKey).decode(props.children);
}
