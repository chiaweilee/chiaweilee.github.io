import React from 'react';
import { Icon, NavBar } from 'antd-mobile';
import IconFont from '@/components/Iconfont-Symbol';
import Content from '@/components/Content';
import Tabs from '@/components/Tabs';

interface Props {
  children: any;
  location: Location;
}

export default (props: Props) => {
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
        {props.children}
      </Content>
    </>
  );
};
