import React from 'react';
import { connect } from 'dva';
import { Badge, Card, Carousel } from 'antd-mobile';
import Icon from '@/components/icon';
// @ts-ignore
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
    const { id } = this.props;
    return (
      <Card full={true} style={{ marginBottom: '100px' }}>
        <Card.Header
          title={id}
          extra={id && hash[id]}
        />
        <Card.Body>
          {' '}
        </Card.Body>
      </Card>
    );
  }

  get btn() {
    const { deleted, fav, id } = this.props;
    const i = Number(id);
    const isDeleted = deleted.indexOf(i) > -1;
    const isFav = fav.indexOf(i) > -1;
    return (
      <div className={style['l6-bottom']}>
        <div className={[style['l6-btn'], style.previous].join(' ')} onClick={this.go.bind(this, -1)}>
          <Icon type="iconreturn" />
        </div>
        <div className={[style['l6-btn'], style.previous, isDeleted ? style.active : ''].join(' ')} onClick={this.del}>
          <Icon type="icondelete_light" />
        </div>
        <div className={style['l6-btn']} onClick={this.open}>
          <Icon type="iconcamera" />
        </div>
        <div className={[style['l6-btn'], isFav ? style.active : ''].join(' ')} onClick={this.fav}>
          <Icon type={ isFav ? 'iconlikefill' : 'iconlike'} />
        </div>
        <div className={style['l6-btn']} onClick={this.go.bind(this, 1)}>
          <Icon type="iconrefresh" />
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
        t.splice(exist, 1);
        dispatch({ type: 'l6/set', layout: {
          [key]: t.slice(0),
        }});
        return;
      }
      dispatch({ type: 'l6/set', layout: {
        [key]: t.concat(i).filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index),
      }});
    }
  };

  go(addition: number) {
    const { dispatch, id } = this.props;
    const i = Number(id);
    if (i) {
      dispatch({ type: 'l6/set', layout: {
        id: i + addition,
      }});
    }
  }

  getImg(i?: number) {
    const { imgServer, id } = this.props;
    const idStr = typeof i === 'number' ? `${i}_${id}` : id;
    return <div className={style['l6-img']}>
      <img referrerpolicy="no-referrer" src={imgServer && utils.replaceParam(imgServer, idStr)} alt="" />
    </div>
  }
}

export default connect((state: any) => ({
  pageServer: state.l6.pageServer,
  imgServer: state.l6.imgServer,
  id: state.l6.id,
  deleted: state.l6.deleted,
  fav: state.l6.fav,
}))(L6);
