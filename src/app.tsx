import React from 'react';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';

if (process.env.NODE_ENV === 'develop') {
  require('why-did-you-update').whyDidYouUpdate(React);
}

const app = dva({
  history: createHistory(),
  initialState: {},
});

export default app;
