module.exports = /* !!( */ function() {
  // banner-js
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/vconsole';
  document.body.appendChild(script);
  // eslint-disable-next-line
  script.onload = script.onerror = () => {
    document.body.removeChild(script);
  };
}; /* )(); */
