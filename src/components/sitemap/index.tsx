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
  renderRoutes(routes: Route[] | void) {
    if (!routes) {
      return null;
    }

    return (
      <ul>
        {routes.map((route, i) => {
          if (route.path) {
            return (
              <li key={route.key || i}>
                <Link to={route.path}>{route.path}</Link>
                {route.routes ? this.renderRoutes(route.routes) : null}
              </li>
            );
          }

          return null;
        })}
      </ul>
    );
  }

  render() {
    return <div>{this.renderRoutes(this.props.route && this.props.route.routes)}</div>;
  }
}
