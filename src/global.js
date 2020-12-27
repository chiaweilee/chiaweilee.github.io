if (process.env.NODE_ENV === 'production') {
  const hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?2d87cebe7ebdbb176e1fb24df6ad7360';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
}
