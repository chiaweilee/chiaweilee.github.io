import 'jest';
import Index from '..';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

const store = createStore(function(state = []) {
  return state;
});

const Router = require('dva/router').routerRedux.ConnectedRouter;

const g_history = createHistory({
  basename: '/',
});

describe('Page: index', () => {
  it('Render correctly', () => {
    const testRenderer: ReactTestRenderer = renderer.create(
      <Provider store={store}>
        <Router history={g_history}>
          <Index />
        </Router>
      </Provider>
    );

    const testInstance = testRenderer.root;

    const outerLayer = testInstance.findByType(Index);
    expect(outerLayer.children.length).toBe(1);
  });
});
