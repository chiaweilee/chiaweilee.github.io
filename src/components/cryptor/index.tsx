import React, { useState, useEffect } from 'react';
import { Input, Typography } from 'antd';
import Confidential from '@/components/confidential';
const Cryptor = require('cryptorjs');

const { TextArea } = Input;
const { Text, Paragraph } = Typography;

const secretKey = 'secretKey';

export default function(props: any) {
  if (localStorage.getItem(secretKey)) {
    return new Cryptor(localStorage.getItem(secretKey)).decode(props.children);
  }
  return <Confidential>{props.children}</Confidential>;
}

export function SecretRegister() {
  const [password, setPassword] = useState('');
  useEffect(() => {
    localStorage.setItem(secretKey, password);
  }, [password]);
  return (
    <Input.Password
      placeholder="input password"
      onChange={e => {
        setPassword(e.target.value);
      }}
    />
  );
}

export function Encoder() {
  const [password, setPassword] = useState(localStorage.getItem(secretKey) || '');
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
      {code && [
        <Paragraph
          copyable={{
            text: `<Cryptor>${code}</Cryptor>`,
          }}
        >
          <Text code>{code}</Text>
        </Paragraph>,
      ]}
    </div>
  );
}
