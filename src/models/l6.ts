import utils from '@/utils';

const namespace = 'l6';

export default {
  namespace,
  state: {
    fav: [],
    deleted: [],
  },
  reducers: {
    update(state, { payload }) {
      const result = Object.assign(state, payload);
      utils.setItem(namespace, result);
      return result;
    },
  },
  effects: {
    *set({ payload, layout }, { put }) {
      yield put({type: 'update', payload: Object.assign(payload || {}, layout || {})});
    },
  },
  subscriptions: {
    init({ dispatch }) {
      const config = utils.getItem(namespace) || {};
      dispatch({type: 'set', payload: config});
    }
  }
}
