import { Toast } from 'antd-mobile';

window.onerror = message => {
  Toast.offline(message, 10);
};
