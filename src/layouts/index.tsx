import React from 'react';
import { Icon, NavBar } from 'antd-mobile';
import IconFont from '@/components/Iconfont-Symbol';
import Content from '@/components/Content';
import Sitemap from '@/components/Sitemap';
import Tabs from '@/components/Tabs';

interface Props {
  children: any;
  location: Location;
  route: any;
}

export default class Layout extends React.PureComponent<Props>{
  public render() {
    return (
      <>
        <NavBar
          icon={<Icon type="left" />}
          rightContent={<Icon type="search" style={{ marginRight: '16px' }} />}
        >
          <IconFont name={'iconInstagram'} style={{ color: '#fff', width: 'auto', height: '50%' }} />
        </NavBar>
        <Content>
          <Tabs />
          <Sitemap {...this.props} />
          {this.props.children}
        </Content>
      </>
    );
  }
}
