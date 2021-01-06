import { Toast } from 'antd-mobile';

window.onerror = message => {
  Toast.offline(message, process.env.NODE_ENV === 'development' ? 1 : 10);
};
