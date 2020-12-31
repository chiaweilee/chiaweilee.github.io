import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Input, Typography } from 'antd';
import Confidential from '@/components/confidential';
const Cryptor = require('cryptorjs');

const { TextArea } = Input;
const { Text, Paragraph } = Typography;

const secretKey = 'secretKey';

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

export function SecretRegister() {
  const [password, setPassword] = useState('');
  useEffect(() => {
    localStorage.setItem(secretKey, password);
  }, [password]);
  return <Input.Password placeholder="input password" onChange={onChange(setPassword)} />;
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
      <Input.Password placeholder="input password" onChange={onChange(setPassword)} />
      <TextArea rows={4} placeholder="input text" onChange={onChange(setText)} />
      {code && (
        <Paragraph
          copyable={{
            text: `<Cryptor>${code}</Cryptor>`,
          }}
        >
          <Text code={true}>{code}</Text>
        </Paragraph>
      )}
    </div>
  );
}
