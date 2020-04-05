import React from 'react';
import { NavBar } from 'antd-mobile';
import Icon from '@/components/icon';
import Navigation from '@/components/navigation';
import utils from '@/utils/index';

export default class extends React.PureComponent<any> {
  public render() {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="iconback" />}
          onLeftClick={utils.historyGoBack}
          rightContent={
            <a href={this.githubPage} rel="noreferrer">
              <Icon type="icongithub" />
            </a>
          }
        />
        <section className={'markdown-body'}>
          {this.props.children}
        </section>
        <Navigation {...this.props} />
      </>
    );
  }

  private get githubPage(): string {
    const { location: { pathname } } = this.props;
    const baseUrl = 'https://github.com/chiaweilee/-/tree/master/src/pages';
    const ext = '.md';
    return `${baseUrl}${pathname}${ext}`;
  }
}
