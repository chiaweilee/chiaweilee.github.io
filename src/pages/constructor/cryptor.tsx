import React, { useState } from 'react';
import { WhiteSpace, TextareaItem } from 'antd-mobile';
import { Encoder } from '@/components/cryptor';

function onChange(setter: (e: any) => void) {
  return function(value) {
    setter(value);
  };
}

export default function() {
  const [text, setText] = useState('');
  return (
    <div>
      <TextareaItem rows={4} count={1000} onChange={onChange(setText)} />
      <WhiteSpace />
      <Encoder text={text} />
    </div>
  );
}
