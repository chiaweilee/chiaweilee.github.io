// @ts-ignore
import history from '@tmp/history';
import initial from 'lodash/initial';

export default {
  historyGoBack() {
    if (
      this &&
      this.props &&
      this.props.location &&
      typeof this.props.location.pathname === 'string'
    ) {
      const paths = this.props.location.pathname.split('/').slice(1);
      if (paths.length > 1) {
        history.push({
          pathname: initial(paths).join('/'),
        });
      } else {
        history.push({
          pathname: '/',
        });
      }
      return;
    }
    history.goBack();
  },
};
