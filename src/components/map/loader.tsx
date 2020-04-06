export let Microsoft: any;
declare let window: any;

export function loadBingApi(key: string): Promise<void> {
  if (!!window.Microsoft) {
    return Promise.resolve();
  }

  const callbackName = 'bingAPIReady';
  let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;
  if (key) {
    url += `&key=${key}`;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = url;
    window.bingAPIReady = () => {
      Microsoft = window.Microsoft;
      resolve();
    };
    script.onerror = (error: any) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
}