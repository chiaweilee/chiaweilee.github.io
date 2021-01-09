import React, { useState, useEffect } from 'react';
import { WhiteSpace, InputItem, Button } from 'antd-mobile';
import { Typography } from 'antd';
import Confidential from '@/components/confidential';
import { compress, decompress } from '@/utils/hash2unicode';

const Cryptor = require('cryptorjs');

const { Text, Paragraph } = Typography;

export const secretKey = 'secretKey';

const automaticClick = obj => {
  var ev = document.createEvent('MouseEvents');
  ev.initMouseEvent(
    'click',
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,
  );
  obj.dispatchEvent(ev);
};

const exportJson = (name, data) => {
  // @ts-ignore
  const urlObject = window.URL || window.webkitURL || window;
  const export_blob = new Blob([data]);
  const a: any = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  a.href = urlObject.createObjectURL(export_blob);
  a.download = name;
  automaticClick(a);
};

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
      onClick={() => { setHidden(false); }}
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

  const head = props.img ? '<C.CImg src="' : '<C.Cryptor>';
  const end = props.img ? '" />' : '</C.Cryptor>';
  const code = new Cryptor(password).encode(props.text);
  const text = `${head}${props.img ? props.name : code}${end}`;

  return (
    <div>
        <Paragraph
          copyable={{
            text,
            onCopy: props.onCopy,
          }}
          style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          <Text code={true}>{text}</Text>
        </Paragraph>
      <WhiteSpace />
      { props.img && <Button
        onClick={() => {
          exportJson(`${props.name}.json` || new Date().valueOf(), JSON.stringify(code));
        }}
      >
        Export
      </Button> }
    </div>
  );
}
