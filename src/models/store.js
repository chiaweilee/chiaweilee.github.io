import fetchql from '../utils/fetchql';

export default {
  namespace: 'store',
  state: {},
  subscriptions: {
    init({ dispatch }) {
      dispatch({ type: 'fetch' });
    },
    interval({ dispatch }) {
      setInterval(dispatch.bind(null, { type: 'fetch' }), 1000);
    },
  },
  reducers: {
    set(state, { t }) {
      return { t };
    },
  },
  effects: {
    *fetch(action, { put }) {
      const { t } = yield fetchql('q', '{t}');
      yield put({ type: 'set', t: new Date() - t });
    },
  },
};
