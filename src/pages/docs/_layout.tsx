import React from 'react';
import { ActionSheet, NavBar, Popover, Modal } from 'antd-mobile';
import Icon from '@/components/icon';
import Navigation from '@/components/navigation';
import { secretKey } from '@/components/cryptor';
import utils from '@/utils';

const actions = ['Cryptor', 'Base64'];

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
            <Popover
              onSelect={opt => {
                switch (opt.props.value) {
                  case 'github':
                    window.open(this.githubPage);
                    break;
                  case 'big':
                    Modal.prompt(
                      'Password',
                      'Password Required',
                      password => {
                        localStorage.setItem(secretKey, password);
                      },
                      'secure-text',
                    );
                    break;
                  case 'construct':
                    ActionSheet.showActionSheetWithOptions(
                      {
                        options: actions,
                        maskClosable: true,
                      },
                      buttonIndex => {
                        if (typeof actions[buttonIndex] === 'string') {
                          this.props.history.push({
                            pathname: `/constructor/${actions[buttonIndex].toLowerCase()}`,
                            state: {
                              refer: this.props.location.pathname,
                            },
                          });
                        }
                      },
                    );
                    break;
                  default:
                }
              }}
              overlay={[
                // @ts-ignore
                <Popover.Item key="1" value="github" icon={<Icon type="icongithub" />}>
                  Github
                </Popover.Item>,
                // @ts-ignore
                <Popover.Item
                  key="2"
                  value="construct"
                  icon={<Icon type="iconsettings" />}
                  disabled={this.constructDisable}
                >
                  Construct
                </Popover.Item>,
                // @ts-ignore
                <Popover.Item key="3" value="big" icon={<Icon type="iconbig" />}>
                  Big
                </Popover.Item>,
              ]}
            >
              <Icon type="ellipsis" />
            </Popover>
          }
        />
        <Navigation {...this.props}>
          <section className={'markdown-body'}>{this.props.children}</section>
        </Navigation>
      </>
    );
  }

  private get constructDisable(): boolean {
    return !localStorage.getItem(secretKey);
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
