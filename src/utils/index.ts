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
  public static setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  public static getItem = (key: string): any => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return;
    }
  };
  public static replaceParam = (url: string, param: string) => url.replace('{$}', param);
}
