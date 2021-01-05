import React, { useState, useEffect } from 'react';
import { WhiteSpace, InputItem } from 'antd-mobile';
import { Typography } from 'antd';
import Confidential from '@/components/confidential';
import { compress, decompress } from '@/utils/hash2unicode';

const Cryptor = require('cryptorjs');

const { Text, Paragraph } = Typography;

export const secretKey = 'secretKey';

export const decoder = (code: string, compressed = false as boolean) =>
  new Cryptor(localStorage.getItem(secretKey)).decode(compressed ? decompress(code) : code);

export default function(props: any) {
  const [hidden, setHidden] = useState(true);
  const [text, setText] = useState(undefined);

  useEffect(() => {
    if (typeof props.children === 'string' && localStorage.getItem(secretKey)) {
      setText(decoder(props.children));
    }
  }, [hidden]);

  if (!hidden && text) {
    return text;
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
  const text = `${head}${props.compress ? compress(code) : code}${end}`;

  return (
    <div>
      <InputItem value={text} readOnly />
      <WhiteSpace />
      <Paragraph
        copyable={{
          text,
          onCopy: props.onCopy,
        }}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <Text code={true}>{code}</Text>
      </Paragraph>
    </div>
  );
}
