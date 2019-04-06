import React from 'react';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';

const app = dva({
  history: createHistory(),
  initialState: {},
});

export default app;
