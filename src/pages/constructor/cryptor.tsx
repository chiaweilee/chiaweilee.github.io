import React, { useState } from 'react';
import { Input } from 'antd';
import { Encoder } from '@/components/cryptor';

const { TextArea } = Input;

function onChange(setter: (e: any) => void) {
  return function(e) {
    setter(e.target.value);
  };
}

export default function() {
  const [text, setText] = useState('');
  return (
    <div>
      <TextArea rows={4} placeholder="input text" onChange={onChange(setText)} />
      <Encoder text={text} />
    </div>
  );
}
