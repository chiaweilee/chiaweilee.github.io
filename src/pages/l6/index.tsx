import React from 'react';
import { connect } from 'dva';
import { Card, Carousel, Grid, Toast } from 'antd-mobile';
import Icon from '@/components/icon';
import utils from '@/utils';
import md5 from '@/utils/md5';
import style from './index.less';

class L6 extends React.PureComponent<any> {
  public state = {
    backTarget: undefined,
  };

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
        {
          Array.from(new Array(3)).map((_, i) => {
            return (
              <div key={i} className={style['l6-img']}>
                {this.getImg(i ? i + 1 : undefined)}
              </div>
            )
          })
        }
      </Carousel>
    );
  }

  get card() {
    const { id } = this.props;
    return (
      <Card full={true} className={style['l6-card']}>
        <Card.Header
          title={id}
          extra={this.hash}
        />
        <Card.Body>
          {this.grid}
        </Card.Body>
      </Card>
    );
  }

  get grid() {
    const { id } = this.props;
    return (
      <Grid
        className={style['l6-grid']}
        data={Array.from(new Array(6))}
        columnNum={3}
        renderItem={(_, i) => (
          <div key={i} onClick={this.go.bind(this, 0, id + i + 1)}>
            {this.getImg(undefined, i + 1)}
          </div>
        )}
      />
    );
  }

  get btn() {
    const { backTarget } = this.state;
    const { deleted, fav, id } = this.props;
    const isDeleted = deleted.indexOf(id) > -1;
    const isFav = fav.indexOf(id) > -1;
    return (
      <div className={style['l6-bottom']}>
        <div className={[style['l6-btn'], style.previous].join(' ')} onClick={this.go.bind(this, ...(backTarget ? [0, backTarget] : [-1, 0]))}>
          <Icon type="iconreturn" />
        </div>
        <div className={[style['l6-btn'], style.previous, isDeleted ? style.active : ''].join(' ')} onClick={this.del}>
          <Icon type="iconcardboardforbid" />
        </div>
        <div className={style['l6-btn']} onClick={this.open}>
          <Icon type="iconcardboard" />
        </div>
        <div className={[style['l6-btn'], isFav ? style.active : ''].join(' ')} onClick={this.fav}>
          <Icon type={ isFav ? 'iconlikefill' : 'iconlike'} />
        </div>
        <div className={style['l6-btn']} onClick={this.go.bind(this, 1, 0)}>
          <Icon type="iconrefresh" />
        </div>
      </div>
    );
  }

  get hash() {
    const { id } = this.props;
    if (id) {
      return md5(id);
    }
    return '';
  }

  open = (nhd?: boolean) => {
    const { pageServer } = this.props;
    if (pageServer) {
      const url = utils.replaceParam(pageServer, this.hash);
      if (nhd === true) {
        window.open(url.replace('_hd', ''));
        return;
      }
      window.open(url);
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
      dispatch({
        type: 'l6/set',
        layout: {
          [key]: t.concat(i).filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index),
        }
      });
    }
  };

  go(addition: number, target?: number) {
    const { dispatch, id } = this.props;
    const t = target || id;
    if (t) {
      this.setState({
        backTarget: id,
      });
      dispatch({ type: 'l6/set', layout: {
        id: t + addition,
      }});
    }
  }

  getImg(i?: number, addition?: number) {
    const { imgServer, id } = this.props;
    const idn = id + (addition || 0);
    const idStr = typeof i === 'number' ? `${i}_${idn}` : idn;
    return <img onError={this.onError} referrerPolicy="no-referrer" src={imgServer && utils.replaceParam(imgServer, idStr)} alt="" />
  }

  onError = () => {
    Toast.info('', 1, undefined, false);
  };
}

export default connect((state: any) => ({
  pageServer: state.l6.pageServer,
  imgServer: state.l6.imgServer,
  id: Number(state.l6.id),
  deleted: state.l6.deleted,
  fav: state.l6.fav,
}))(L6);
