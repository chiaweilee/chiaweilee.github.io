import { first } from 'aliba';

const getDateString = (): string => new Date().toJSON().split('T')[0];

const createURL = (departure: string) => (arrival: string) =>
  `https://k.airasia.com/availabledates/api/v1/pricecalendar/0/1/CNY/${departure.toUpperCase()}/${arrival.toUpperCase()}/${getDateString()}/1/16`;

const departure = 'CKG';
const arrival = 'DMK';

export default {
  namespace: 'airasia',
  state: {},
  subscriptions: {
    init({ dispatch }) {
      dispatch({ type: 'fetch' });
    },
  },
  reducers: {
    set(state, { t }) {
      return t;
    },
  },
  effects: {
    *fetch(action, { put }) {
      const t = yield (yield fetch(createURL(departure)(arrival))).json();
      yield put({
        type: 'set',
        t: {
          [departure.toUpperCase().concat(arrival.toUpperCase())]: first(t),
        },
      });
    },
  },
};
