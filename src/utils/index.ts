// @ts-ignore
import history from '@tmp/history';

export default class Utils {
  public static historyGoBack = () => {
    history.goBack();
  };
  public static triggerFn = (fn: any) => {
    if (typeof fn === 'function') {
      fn();
    }
  };
}
