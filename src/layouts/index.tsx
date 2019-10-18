import React from 'react';
import { NavBar } from 'antd-mobile';
import Content from '@/components/content';
import Sitemap from '@/components/sitemap';
import TanukiLogo from '@/components/tanuki-logo';

interface Props {
  children: any;
  location: Location;
  route: any;
}

export default class Layout extends React.PureComponent<Props> {
  public componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    bl.sum('test');
  }

  public render() {
    return (
      <>
        <NavBar
          icon={<TanukiLogo />}
          // rightContent={<Icon type="search" style={{ marginRight: '16px' }} />}
        />
        <Content>
          {/*<Tabs />*/}
          <Sitemap {...this.props} />
          {this.props.children}
        </Content>
      </>
    );
  }
}
