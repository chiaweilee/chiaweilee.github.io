import React from 'react';
import { connect } from 'dva';
import { Badge, Card, Carousel } from 'antd-mobile';
import Icon from '@/components/icon';
import hash from 'uh06l6/hash.json';
import utils from '@/utils';
import style from './index.less';

const replaceParams = (url: string, param: string) => url.replace('{$}', param);

class L6 extends React.PureComponent<any> {
  render() {
    return <div>
      {this.imgView}
      {this.card}
      {this.btn}
    </div>
  }

  get imgView() {
    const { id } = this.props;
    return (
      <Carousel
        key={id}
        autoplay={false}
        infinite={true}
      >
        {this.getImg()}
        {this.getImg(2)}
        {this.getImg(3)}
      </Carousel>
    );
  }

  get card() {
    const { id, read, deleted, fav } = this.props;
    return (
      <Card full={true} style={{ marginBottom: '100px' }}>
        <Card.Header
          title={id}
          extra={id && hash[id]}
        />
        <Card.Body>
          <div><Badge text={read.length}>Read</Badge></div>
          <div><Badge text={deleted.length}>Deleted</Badge></div>
          <div><Badge text={fav.length}>Fav</Badge></div>
        </Card.Body>
      </Card>
    );
  }

  get btn() {
    const { deleted, fav, id } = this.props;
    const isDeleted = deleted.indexOf(id) > -1;
    const isFav = fav.indexOf(id) > -1;
    return (
      <div className={style['l6-bottom']}>
        <div className={[style['l6-btn'], style.previous].join(' ')}>
          <Icon type="iconreturn" onClick={this.go.bind(this, -1)} />
        </div>
        <div className={[style['l6-btn'], style.previous, isDeleted ? style.active : ''].join(' ')}>
          <Icon type="icondelete_light" onClick={this.del} />
        </div>
        <div className={style['l6-btn']}>
          <Icon type="iconcamera" onClick={this.open} />
        </div>
        <div className={[style['l6-btn'], isFav ? style.active : ''].join(' ')}>
          <Icon type={ isFav ? 'iconlikefill' : 'iconlike'} onClick={this.fav} />
        </div>
        <div className={style['l6-btn']}>
          <Icon type="iconrefresh" onClick={this.go.bind(this, 1)} />
        </div>
      </div>
    );
  }

  open = () => {
    const { pageServer, id } = this.props;
    if (pageServer && hash[id]) {
      window.open(replaceParams(pageServer, hash[id]));
    }
  };

  del = () => {
    this.set('deleted');
  };

  fav = () => {
    this.set('fav');
  };

  set = (key: 'deleted' | 'fav') => {
    const { dispatch, id } = this.props;
    const i = Number(id);
    const t = this.props[key];
    if (i && t) {
      const exist = t.indexOf(i);
      if (exist > -1) {
        t.splice(exist, 1)
        dispatch({ type: 'l6/set', layout: {
          [key]: t.slice(0),
        }});
        return;
      }
      dispatch({ type: 'l6/set', layout: {
        [key]: t.concat(i).filter((item, index, arr) => arr.indexOf(item, 0) === index),
      }});
    }
  };

  go(addition: number) {
    const { dispatch, id, read } = this.props;
    const i = Number(id);
    if (i) {
      dispatch({ type: 'l6/set', layout: {
        read: read.concat(i).filter((item, index, arr) => arr.indexOf(item, 0) === index),
        id: i + addition,
      }});
    }
  }

  getImg(i?: number) {
    const { imgServer, id } = this.props;
    const idStr = typeof i === 'number' ? `${i}_${id}` : id;
    return <div className={style['l6-img']}>
      <img src={imgServer && utils.replaceParam(imgServer, idStr)} alt="" />
    </div>
  }
}

export default connect((state: any) => ({
  pageServer: state.l6.pageServer,
  imgServer: state.l6.imgServer,
  id: state.l6.id,
  read: state.l6.read,
  deleted: state.l6.deleted,
  fav: state.l6.fav,
}))(L6);
