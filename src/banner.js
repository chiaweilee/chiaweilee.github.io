/* eslint-disable no-new,no-undef,no-multi-assign */

module.exports = /* !!( */ function() {
  // banner-js
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/vconsole';
  document.body.appendChild(script);
  script.onload = script.onerror = () => {
    new VConsole();
    document.body.removeChild(script);
  };
}; /* )(); */
