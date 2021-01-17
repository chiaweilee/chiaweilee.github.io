import { Toast } from 'antd-mobile';

window.onerror = (msg) => {
  Toast.offline(msg, process.env.NODE_ENV === 'development' ? 1 : 10);
};
