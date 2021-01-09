import { Toast } from 'antd-mobile';

window.onerror = (...argv) => {
  Toast.offline(argv.join(' '), process.env.NODE_ENV === 'development' ? 1 : 10);
};
