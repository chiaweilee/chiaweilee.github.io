import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export type BasicLayoutComponent<Props> = React.SFC<Props>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const NavBarRightContent: Array = [
  (
    <Link key={'test'} to={'/test'}>
      <Icon key="1" type="ellipsis" />
    </Link>
  ),
];

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = ({ children, history, location }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="transition" timeout={300}>
        <div className={'app'}>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={history.goBack}
            rightContent={NavBarRightContent}
          >
            {JSON.stringify(location.pathname)}
          </NavBar>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default BasicLayout;
