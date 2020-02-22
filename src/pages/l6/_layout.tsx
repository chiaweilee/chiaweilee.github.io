import React from 'react';
import { connect } from 'dva';
import {Modal, NavBar } from 'antd-mobile';
import Icon from '@/components/icon';
import utils from '@/utils/index';
import style from './_layout.less';

class Layout extends React.PureComponent<any> {
  public render() {
    return (
      <div className={style['l6-layout']}>
        <NavBar
          mode="light"
          rightContent={[
            <Icon className={style['header-icon']} key={2} type="iconmore" onClick={this.setting} />,
          ]}
        />
        {this.props.children}
      </div>
    );
  }

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
    )
  };
}

export default connect((state: any) => ({
  l6: state.l6,
}))(Layout);
