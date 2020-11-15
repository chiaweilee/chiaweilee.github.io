import React from 'react';
import { WingBlank, WhiteSpace, Tag } from 'antd-mobile';
import Link from 'umi/link';
import groupBy from 'lodash/groupBy';
import isEqual from 'lodash/isEqual';
import last from 'lodash/last';
import isPlainObject from 'lodash/isPlainObject';
import map from 'lodash/map';

const computeRoutes = (routes: any): any[] => {
  return (
    (routes &&
      Array.isArray(routes) &&
      routes
        .filter(r => !!r.path)
        .map((route: any) => route.path.split('/').slice(1))
        .filter(r => r.length > 1 && !!r[0])) ||
    []
  );
};

export default class extends React.PureComponent<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      routes: computeRoutes(props.route && props.route.routes),
    };
  }

  public render() {
    return [
      <WhiteSpace size="lg" />,
      <WingBlank size="md">{this.renderRoutes}</WingBlank>,
      this.props.children,
      <ul>{this.renderRelative}</ul>,
    ];
  }

  private get currentRoute() {
    return this.props.location.pathname.split('/').splice(1);
  }

  private get currentDir() {
    return this.currentRoute.slice(0, this.currentRoute.length);
  }

  private get routesIndex() {
    const { routes } = this.state;
    const matchedRoutes = routes.filter((route: any[]) => {
      return (
        isEqual(this.currentDir, route.slice(0, this.currentDir.length)) &&
        !isEqual(this.currentDir, route)
      );
    });
    return groupBy(matchedRoutes, this.currentRoute.length);
  }

  private get brotherRoutes() {
    const { routes } = this.state;
    return routes.filter((route: any[]) => {
      return isEqual(
        this.currentDir.slice(0, this.currentDir.length - 1),
        route.slice(0, this.currentDir.length - 1),
      );
    });
  }

  private get renderRoutes() {
    return (
      isPlainObject(this.routesIndex) &&
      map(this.routesIndex, (route: string[], key: any) => {
        const pathname = [...this.currentDir, key].join('/');
        return (
          <Tag key={pathname}>
            <Link to={`/${pathname}`}>{key}</Link>
          </Tag>
        );
      })
    );
  }

  private get renderRelative() {
    return this.brotherRoutes.map((route: any) => (
      <li>
        <Link to={`/${route.join('/')}`}>{last(route)}</Link>
      </li>
    ));
  }
}
