import React from 'react';
import { History } from 'history';
import { NavBar } from 'antd-mobile';
import Content from '@/components/content';
import Sitemap from '@/components/sitemap';
import Iconfont from '@/components/Iconfont-Symbol';

interface Props {
  children: any;
  history: History;
  location: Location;
  route: any;
}

export default class extends React.PureComponent<Props> {
  public constructor(props: any) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  public render() {
    return (
      <>
        <NavBar
          icon={<Iconfont name={'iconarrow-lift'} onClick={this.goBack} />}
          leftContent={<Iconfont name={'iconagriculture'} />}
          rightContent={<Iconfont name={'iconoperation'} />}
        />
        <Content>
          <Sitemap {...this.props} />
          {this.props.children}
        </Content>
      </>
    );
  }

  private goBack() {
    this.props.history.goBack();
  }
}
