import React, { useState } from 'react';
import { Upload } from 'antd';
import { Button, WhiteSpace, InputItem } from 'antd-mobile';
import { Encoder } from '@/components/cryptor';
import styles from './base64.less';

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
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.uploader}>
      <Upload
        accept={'image/*'}
        name={'file'}
        fileList={[]}
        disabled={loading}
        onChange={async info => {
          setLoading(true);
          setImg(await getBase64(info.file.originFileObj));
          setLoading(false);
        }}
      >
        <Button loading={loading} disabled={loading}>
          Click to Upload
        </Button>
      </Upload>
      {img && (
        <div>
          <WhiteSpace />
          <img src={img} width="100%" alt="" />
          <WhiteSpace />
          <InputItem value={img} readOnly />
          <WhiteSpace />
          <Encoder compress head={'<C.CryptorImg src={`'} text={img} end={'`} />'} />
        </div>
      )}
    </div>
  );
}
