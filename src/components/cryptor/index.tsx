import React, { useState, useEffect } from 'react';
import { Input, Typography } from 'antd';
import Confidential from '@/components/confidential';
const Cryptor = require('cryptorjs');

declare var window: any;

const { TextArea } = Input;
const { Text, Paragraph } = Typography;

export default function(props: any) {
  if (typeof window.secretKey === 'string') {
    return new Cryptor(window.secretKey).decode(props.children);
  }
  return <Confidential />;
}

export function Encoder() {
  const [password, setPassword] = useState('');
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
      <Input.Password
        placeholder="input password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <TextArea
        rows={4}
        placeholder="input text"
        onChange={e => {
          setText(e.target.value);
        }}
      />
      {code && (
        <Paragraph copyable={{ text: code }}>
          <Text code>{code}</Text>
        </Paragraph>
      )}
    </div>
  );
}
