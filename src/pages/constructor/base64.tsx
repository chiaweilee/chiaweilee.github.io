import React, { useState } from 'react';
import { Upload, Button, Input } from 'antd';
import { WhiteSpace } from 'antd-mobile';
import { Encoder } from '@/components/cryptor';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default function() {
  const [img, setImg] = useState(undefined);

  return (
    <div>
      <Upload
        accept={'image/*'}
        name={'file'}
        fileList={[]}
        onChange={async info => {
          setImg(await getBase64(info.file.originFileObj));
        }}
      >
        <Button>Click to Upload</Button>
      </Upload>
      {img && (
        <div>
          <WhiteSpace />
          <img src={img} width="100%" alt="" />
          <WhiteSpace />
          <Encoder head={"<C.CryptorImg src={'"} text={img} end={'\'} alt="" />'} />
        </div>
      )}
    </div>
  );
}
