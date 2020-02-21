import utils from '@/utils';
import { index } from '@/pages/l6'

export default {
  namespace: 'l6',
  state: {},
  reducers: {
    update(state, { payload }) {
      return Object.assign(state, payload);
    },
  },
  effects: {
    *loadConfig(_, { put }) {
      yield put({ type: 'update', payload: {
        pageServer: utils.getConfig('l6', 'pageServer'),
        imgServer: utils.getConfig('l6', 'imgServer'),
        stepNumber: utils.getConfig('l6', 'stepNumber'),
      }});
    },
    *stepNext(_, { put }) {
      const next = String(Number(utils.getConfig('l6', 'stepNumber')) + index.length);
      utils.setConfig('l6', 'stepNumber', next);
      yield put({ type: 'update', payload: {
        stepNumber: next,
      } });
    },
  },
  subscriptions: {
    init({ dispatch }) {
      dispatch({ type: 'loadConfig' });
    }
  }
}
