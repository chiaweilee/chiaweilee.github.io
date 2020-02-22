import React from 'react';
import { NavBar } from 'antd-mobile';
import Icon from '@/components/icon';
import Sitemap from '@/components/sitemap';
import utils from '@/utils/index';

export default class extends React.PureComponent<any> {
  public render() {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="iconback" />}
          onLeftClick={utils.historyGoBack}
        />
        <Sitemap {...this.props} />
        {this.props.children}
      </>
    );
  }
}
