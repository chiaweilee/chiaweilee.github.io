const GET_TIME_STAMP = 'api/timestamp';

export default {
  namespace: 'syncTimeDiff',
  state: {},
  subscriptions: {
    interval({ dispatch }) {
      setInterval(() => {
        dispatch({ type: 'fetch' });
      }, 2000);
    },
  },
  reducers: {
    set(state, { t }) {
      return { t };
    },
  },
  effects: {
    *fetch(action, { put }) {
      const { t } = yield (yield fetch(GET_TIME_STAMP)).json();
      yield put({ type: 'set', t: new Date() - t });
    },
  },
};
