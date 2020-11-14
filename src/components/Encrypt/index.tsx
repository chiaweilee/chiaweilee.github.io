import React from 'react';
const Cryptorjs = require('cryptorjs');

export default class extends React.PureComponents {
  render () {
    return new Cryptorjs(window.secretKey).decode(this.props.children);
  }
}
