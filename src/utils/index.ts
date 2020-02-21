// @ts-ignore
import history from '@/pages/.umi/history';

export default class Utils {
  public static historyGoBack = () => {
    history.goBack();
  };
  public static triggerFn = (fn: any) => {
    if (typeof fn === 'function') {
      fn();
    }
  };
  public static setConfig = (categoryKey: string, key: string, value: string) => {
    localStorage.setItem(['config', categoryKey, key].join('-'), value);
  };
  public static getConfig = (categoryKey: string, key: string) => localStorage.getItem(['config', categoryKey, key].join('-'));
}
