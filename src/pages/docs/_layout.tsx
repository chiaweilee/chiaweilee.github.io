import React from 'react';
import { NavBar } from 'antd-mobile';
import Icon from '@/components/icon';
import GithubEdit from '@/components/github-edit';
import Navigation from '@/components/navigation';
import Drawer from '@/components/drawer';
import utils from '@/utils/index';

interface State {
  drawer: boolean;
}

export default class extends React.PureComponent<any, State> {
  public render() {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="iconback" />}
          onLeftClick={utils.historyGoBack}
          rightContent={
            <Drawer sidebar={(close: () => void) => <Navigation {...this.props} close={close} />}>
              <Icon type="iconlist" />
            </Drawer>
          }
        />
        <section className={'markdown-body'}>{this.props.children}</section>
        <GithubEdit href={this.githubPage} />
      </>
    );
  }

  private get githubPage(): string {
    const {
      location: { pathname },
    } = this.props;
    const baseUrl = 'https://github.com/chiaweilee/-/tree/master/src/pages';
    const ext = '.mdx';
    return `${baseUrl}${pathname}${ext}`;
  }
}
