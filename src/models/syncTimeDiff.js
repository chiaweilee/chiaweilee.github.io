import fetchql from '../utils/fetchql';

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
      const { t } = yield fetchql('q', '{t}');
      yield put({ type: 'set', t: new Date() - t });
    },
  },
};
