import React from 'react';
import { History } from 'history';
import { NavBar } from 'antd-mobile';
import Content from '@/components/content';
import Sitemap from '@/components/sitemap';
import TabBar from '@/components/tabbar';
import TanukiLogo from '@/components/tanuki-logo';

interface Props {
  children: any;
  history: History;
  location: Location;
  route: any;
}

export default class extends React.PureComponent<Props> {
  public render() {
    return (
      <>
        <NavBar icon={<TanukiLogo />} />
        <TabBar {...this.props} />
        <Content>
          <Sitemap {...this.props} />
          {this.props.children}
        </Content>
      </>
    );
  }
}
