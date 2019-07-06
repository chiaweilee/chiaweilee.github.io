import React from 'react';
import { NavBar } from 'antd-mobile';
import IconFont from '@/components/Iconfont-Symbol';
import Content from '@/components/Content';

interface Props {
  children: any;
  location: Location;
}

export default (props: Props) => {
  return (
    <>
      <NavBar>
        <IconFont name={'iconInstagram'} style={{ color: '#fff', width: 'auto', height: '50%' }} />
      </NavBar>
      <Content>{props.children}</Content>
    </>
  );
};
