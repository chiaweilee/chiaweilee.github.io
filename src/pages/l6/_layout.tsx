import React from 'react';
import { connect } from 'dva';
import { Modal, NavBar } from 'antd-mobile';
import Icon from '@/components/icon';
import Content from '@/components/content';
import utils from '@/utils/index';

export default connect()(class extends React.PureComponent<any> {
  public render() {
    return (
      <>
      <NavBar
        mode="light"
        icon={<Icon type="iconback" />}
        onLeftClick={utils.historyGoBack}
        rightContent={[
          <Icon key={1} type="iconrefresh" onClick={() => this.props.dispatch({ type: 'l6/stepNext' })} style={{ marginRight: '16px' }} />,
          <Icon key={2} type="iconsettings" onClick={this.setting} />,
        ]}
      />
      <Content>
        {this.props.children}
      </Content>
      </>
    );
  }

  private setting = () => {
    this.askSetting('pageServer', () => {
      this.askSetting('imgServer', () => {
        this.askSetting('stepNumber', () => {
          this.props.dispatch({ type: 'l6/loadConfig' });
        });
      });
    });
  };

  private askSetting = (key: string, next?: any) => Modal.prompt(
    'Setting',
    key,
    (value: string) => {
      utils.setConfig('l6', key, value);
      utils.triggerFn(next);
    },
    'default',
    utils.getConfig('l6', key) || '',
  );
})
