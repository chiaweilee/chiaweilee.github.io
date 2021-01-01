import React, { useState, useEffect } from 'react';
// @ts-ignore
import { WhiteSpace } from 'antd-mobile';
import { Input, Typography } from 'antd';
import Confidential from '@/components/confidential';
const Cryptor = require('cryptorjs');

const { TextArea } = Input;
const { Text, Paragraph } = Typography;

export const secretKey = 'secretKey';

function onChange(setter: (e: any) => void) {
  return function(e) {
    setter(e.target.value);
  };
}

export default function(props: any) {
  const [hidden, setHidden] = useState(true);
  if (!hidden && localStorage.getItem(secretKey)) {
    return new Cryptor(localStorage.getItem(secretKey)).decode(props.children);
  }
  return <Confidential onClick={() => { setHidden(false); }}>{props.children}</Confidential>;
}

export function Encoder(props) {
  const password = localStorage.getItem(secretKey);
  const [text, setText] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    if (password && text) {
      setCode(new Cryptor(password).encode(text));
    } else {
      setCode('');
    }
  }, [password, text]);

  return (
    <div>
      <TextArea rows={4} placeholder="input text" onChange={onChange(setText)} />
      <WhiteSpace />
      {code && (
        <Paragraph
          copyable={{
            text: `<C.Cryptor>${code}</C.Cryptor>`,
            onCopy: props.onCopy,
          }}
        >
          <Text code={true}>{code}</Text>
        </Paragraph>
      )}
    </div>
  );
}
