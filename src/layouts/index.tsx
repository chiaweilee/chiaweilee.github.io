import React from 'react';
import { LocaleProvider } from 'antd';
import en_GB from 'antd/lib/locale-provider/en_GB';
import { NavBar, Icon } from 'antd-mobile';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default ({ children, history, location }) => {
  return (
    <LocaleProvider locale={en_GB}>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="transition" timeout={300}>
          <div>
            <NavBar mode="light" icon={<Icon type="left" />}>
              {JSON.stringify(location.pathname)}
            </NavBar>
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </LocaleProvider>
  );
};
