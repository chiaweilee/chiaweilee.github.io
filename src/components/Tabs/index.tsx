import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

interface ContentProps {
  children?: any;
}

const tabs = [
  { title: '1st Tab' },
  { title: '2nd Tab' },
  { title: '3rd Tab' },
  { title: '4th Tab' },
  { title: '5th Tab' },
  { title: '6th Tab' },
  { title: '7th Tab' },
  { title: '8th Tab' },
  { title: '9th Tab' },
];

export default class Index extends React.PureComponent<ContentProps> {
  public render() {
    return (
      <div>
        <Tabs tabs={tabs} renderTabBar={this.renderTabBar}>
          1111
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }

  private renderTabBar(props: object) {
    return <Tabs.DefaultTabBar {...props} page={3} />;
  }
}
