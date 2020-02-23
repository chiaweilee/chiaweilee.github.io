import React from 'react';
import { connect } from 'dva';
import { Modal, NavBar, Popover } from 'antd-mobile';
import Icon from '@/components/icon';
import utils from '@/utils/index';
import style from './_layout.less';

class Layout extends React.PureComponent<any, any> {
  public render() {
    return (
      <div className={style['l6-layout']}>
        <NavBar
          mode="light"
          rightContent={
            <Popover
              overlay={[
                (<Popover.Item key="favor" icon={<Icon type="iconfavor" />}>Fav</Popover.Item>),
                (<Popover.Item key="deleted" icon={<Icon type="iconfootprint" />}>Deleted</Popover.Item>),
                (<Popover.Item key="setting" icon={<Icon type="iconsettings" />}>Setting</Popover.Item>),
                (<Popover.Item key="about" icon={<Icon type="iconbig" />}>About</Popover.Item>),
              ]}
              onSelect={this.onSelect}
            >
              <Icon className={style['header-icon']} key={2} type="iconmore" />
            </Popover>
          }
        />
        {this.props.children}
      </div>
    );
  }

  private onSelect = (opt: any) => {
    switch (opt.key) {
      case 'setting':
        this.setting();
        break;
      case 'about':
        this.about();
        break;
      default:
    }
    this.setState({
      popoverVisible: false,
    });
  };

  private about = () => {
    const { l6, dispatch } = this.props;
    return Modal.prompt(
      '',
      '',
      (value: string) => {
        try {
          const result = JSON.parse(value);
          dispatch({ type: 'l6/set', layout: result });
          utils.triggerFn(next);
        } catch (e) {
          //
        }
      },
      'default',
      JSON.stringify(l6) || '',
    );
  };

  private setting = () => {
    this.askSetting('pageServer', () => {
      this.askSetting('imgServer', () => {
        this.askSetting('id', () => {
          this.props.dispatch({ type: 'l6/loadConfig' });
        });
      });
    });
  };

  private askSetting = (key: string, next?: any) => {
    const { l6, dispatch } = this.props;
    return Modal.prompt(
      'Setting',
      `Please set ${key}:`,
      (value: string) => {
        dispatch({ type: 'l6/set', layout: {
          [key]: value,
        }});
        utils.triggerFn(next);
      },
      'default',
      l6[key] || '',
    );
  };
}

export default connect((state: any) => ({
  l6: state.l6,
}))(Layout);
