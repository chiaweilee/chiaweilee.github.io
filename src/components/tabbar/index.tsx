import React from 'react';
import { History } from 'history';
import { TabBar } from 'antd-mobile';
import Iconfont from '@/components/Iconfont-Symbol';

interface Props {
  children: any;
  history: History;
  location: Location;
  route: any;
}

const nav: any = [
  { icon: 'iconcalculator', key: 'docs' },
  { icon: 'iconcode', key: 'new' },
  { icon: 'iconcamera', key: 'v' },
];

export default class extends React.PureComponent<Props> {
  public constructor(props: Props) {
    super(props);
    this.linkToNew = this.linkToNew.bind(this);
  }

  public render() {
    return (
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
        {nav.map((r: any) => {
          return (
            <TabBar.Item
              icon={<Iconfont name={r.icon} />}
              title={r.key}
              key={r.key}
              onPress={r.key === 'new' ? this.linkToNew : this.linkTo.bind(this, r.key)}
            />
          );
        })}
      </TabBar>
    );
  }

  private linkTo(pathname: string) {
    if (!pathname) {
      return;
    }
    this.props.history.push({
      pathname: `/${pathname}`,
    });
  }

  private linkToNew() {
    location.href = `https://github.com/chiaweilee/dear.red/new/master/src/pages/${this.currentDir}`;
  }

  private get currentDir() {
    const dirs = Array.from(
      new Set(
        this.props.route.routes
          .filter((route: any) => !!route.path)
          .map((route: any) => route.path.split('/')[1])
          .filter((path: string) => !!path),
      ),
    );

    return dirs.length === 1 ? dirs[0] : null;
  }
}
