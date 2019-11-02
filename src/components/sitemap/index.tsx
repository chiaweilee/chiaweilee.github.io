import React from 'react';
import Link from 'umi/link';

interface Props {
  route?: Route;
}

interface Route {
  key: any;
  component: any;
  exact?: boolean;
  path?: string;
  _title?: string;
  _title_default?: string;
  routes?: Route[];
}

export default class SiteMap extends React.PureComponent<Props> {
  public render() {
    return <div>{this.renderRoutes(this.routes)}</div>;
  }

  private get routes() {
    return (
      this.props.route &&
      this.props.route.routes &&
      this.props.route.routes
        .filter(route => !!route.path)
        .map((route: any) => route.path.split('/').slice(1))
        .filter(route => !!route[0])
    );
  }

  private renderRoutes(routes: Route[] | void) {
    if (!routes) {
      return null;
    }
    return (
      <ul>
        {this.routes &&
          this.routes.map((route: string[]) => {
            const pathname = route.join('/');
            return (
              <li key={pathname}>
                <Link to={`/${pathname}`}>{route.slice(1).join('/')}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}
