import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd-mobile';
import hash from 'uh06l6/hash.json';
import style from './index.less';

export const index = [0, 1, 2, 3, 4, 5];

const replaceParams = (url: string, param: string) => url.replace('{$}', param);

export default connect((state: any) => ({
  pageServer: state.l6.pageServer,
  imgServer: state.l6.imgServer,
  stepNumber: state.l6.stepNumber,
}))(({ pageServer, stepNumber, imgServer }) => {
  if (!pageServer || !imgServer || !stepNumber) {
    return null;
  }

  return index.map(i => {
    const id = Number(stepNumber) + i;
    const open = () => {
      window.open(replaceParams(pageServer, hash[id]))
    };

    return <Card key={id} style={{ marginTop: '20px' }}>
        <Card.Header
          title={<a href={replaceParams(pageServer, hash[id])} target="_blank" onclick="javascript:void(0);">{id}</a> }
          extra={<button onClick={open}>{hash[id]}</button>}
        />
        <Card.Body>
          <img className={style['l6-img']} src={replaceParams(imgServer, id)} />
          {[2, 3].map(x => <img key={`${x}_${id}`} src={replaceParams(imgServer, `${x}_${id}`)} className={style['l6-img']} />)}
        </Card.Body>
      </Card>
    }
  );
})
