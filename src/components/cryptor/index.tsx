import React, { useState } from 'react';
import { Typography } from 'antd';
import Confidential from '@/components/confidential';
const Cryptor = require('cryptorjs');

const { Text, Paragraph } = Typography;

export const secretKey = 'secretKey';

export const decoder = (code: string) => new Cryptor(localStorage.getItem(secretKey)).decode(code);

export default function(props: any) {
  const [hidden, setHidden] = useState(true);
  if (!hidden && localStorage.getItem(secretKey)) {
    return decoder(props.children);
  }
  return (
    <Confidential
      onClick={() => {
        setHidden(false);
      }}
    >
      {props.children}
    </Confidential>
  );
}

export function Encoder(props) {
  const password = localStorage.getItem(secretKey);

  if (!props.text) {
    return null;
  }

  const head = props.head || '<C.Cryptor>';
  const end = props.end || '</C.Cryptor>';
  const code = new Cryptor(password).encode(props.text);

  return (
    <Paragraph
      copyable={{
        text: `${head}${code}${end}`,
        onCopy: props.onCopy,
      }}
      style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
    >
      <Text code={true}>{code}</Text>
    </Paragraph>
  );
}
